import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import {
  personalInfo,
  about,
  experience,
  education,
  certifications,
  skills,
  additionalSkills,
  projects,
  contact,
  socialLinks,
} from "../data/portfolioData";

/* ────────────────────────────────────────────────────────────── */
/*  Build a flat searchable index from the centralized data       */
/* ────────────────────────────────────────────────────────────── */

interface IndexEntry {
  keywords: string[];
  answer: string;
  /** Higher priority entries win ties — category entries beat per-item entries */
  priority?: number;
}

/**
 * Simple stemmer — strips common English suffixes so "projects" matches
 * "project", "skills" matches "skill", "certifications" matches
 * "certification", etc.
 */
function stem(word: string): string {
  let w = word.toLowerCase();
  if (w.length <= 3) return w;
  if (w.endsWith("ies")) return w.slice(0, -3) + "y";
  if (w.endsWith("ves")) return w.slice(0, -3) + "f";
  if (w.endsWith("ses") || w.endsWith("zes")) return w.slice(0, -2);
  if (w.endsWith("ing")) {
    const base = w.slice(0, -3);
    return base.length >= 3 ? base : w;
  }
  if (w.endsWith("ed")) {
    const base = w.slice(0, -2);
    return base.length >= 3 ? base : w;
  }
  if (w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
  return w;
}

/** Words that carry no meaning for intent detection */
const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "i", "my", "me", "we", "you", "your", "he", "she", "it", "they", "their",
  "this", "that", "these", "those", "of", "in", "on", "at", "to", "for",
  "with", "about", "from", "by", "as", "or", "and", "but", "so", "do", "did",
  "does", "have", "has", "had", "can", "could", "would", "should", "will",
  "what", "which", "who", "how", "when", "where", "why", "tell", "show",
  "give", "list", "all", "any", "some", "more", "most", "also", "please",
  "want", "know", "need", "see", "get", "can", "just", "really", "very",
]);

function buildIndex(): IndexEntry[] {
  const entries: IndexEntry[] = [];

  // ── General conversational responses ──
  entries.push({
    keywords: ["good", "morning", "afternoon", "evening", "night"],
    answer: `Good day! 😊 I'm the portfolio assistant for ${personalInfo.name}. Feel free to ask me anything about the portfolio — projects, skills, experience, and more!`,
    priority: 3,
  });

  entries.push({
    keywords: ["thank", "thanks", "thankyou", "appreciate", "grateful", "thx", "ty"],
    answer: "You're welcome! 😊 Feel free to ask if you have any more questions about the portfolio.",
    priority: 3,
  });

  entries.push({
    keywords: ["bye", "goodbye", "cya", "later", "farewell", "see"],
    answer: `Goodbye! 👋 Thanks for visiting ${personalInfo.name}'s portfolio. Feel free to reach out at ${contact.email} anytime!`,
    priority: 3,
  });

  entries.push({
    keywords: ["how", "doing", "feeling", "going", "day", "fine", "well"],
    answer: "I'm doing great, thanks for asking! 😄 I'm here to help you explore this portfolio. What would you like to know?",
    priority: 3,
  });

  entries.push({
    keywords: ["help", "assistance", "guide", "support", "assist", "question"],
    answer: `Sure, I'm here to help! 🤖 You can ask me about:\n• Projects\n• Skills & Technologies\n• Work Experience\n• Education\n• Certifications\n• Contact Details\n\nWhat would you like to know?`,
    priority: 3,
  });

  entries.push({
    keywords: ["nice", "cool", "awesome", "great", "amazing", "wow", "impressive", "good", "excellent", "brilliant"],
    answer: "Thank you so much! 🌟 There's a lot more to explore. Feel free to ask about the projects, skills, or anything else on this portfolio!",
    priority: 3,
  });

  entries.push({
    keywords: ["ok", "okay", "alright", "sure", "got", "understood", "right"],
    answer: "Great! Is there anything else you'd like to know about the portfolio? 😊",
    priority: 3,
  });

  entries.push({
    keywords: ["joke", "funny", "laugh", "humor", "fun"],
    answer: "Why do programmers prefer dark mode? Because light attracts bugs! 😄\n\nAnyway, if you'd like to know more about what Krishna has built, just ask!",
    priority: 3,
  });

  // ── Greeting / Who ──
  entries.push({
    keywords: ["hi", "hello", "hey", "who", "name", "introduce", "yourself", "krishna"],
    answer: `Hi! I'm the portfolio assistant for ${personalInfo.name}. ${personalInfo.title}. ${personalInfo.bio}`,
    priority: 2,
  });

  // ── About ──
  entries.push({
    keywords: ["about", "summary", "background", "story", "bio", "overview", "info", "detail", "himself", "person"],
    answer: `About ${personalInfo.name}:\n\n${about.summary}\n\n${about.story.join(" ")}`,
    priority: 2,
  });

  // ── Experience ──
  entries.push({
    keywords: ["experience", "work", "intern", "internship", "job", "career", "company", "professional", "worked", "role"],
    answer: experience
      .map((e) => `${e.role} at ${e.company} — ${e.description}`)
      .join("\n\n"),
    priority: 2,
  });

  // ── Education ──
  entries.push({
    keywords: [
      "education", "degree", "college", "university", "study",
      "btech", "b.tech", "school", "academic", "qualification", "studying", "institution",
    ],
    answer: education
      .map(
        (e) =>
          `${e.degree} from ${e.institution} (${e.period}). ${e.description}`
      )
      .join("\n\n"),
    priority: 2,
  });

  // ── Certifications ──
  entries.push({
    keywords: ["certification", "certificate", "training", "course", "certified", "qualify", "credentials"],
    answer: `Certifications & Training:\n${certifications
      .map((c) => `• ${c}`)
      .join("\n")}`,
    priority: 2,
  });

  // ── Skills ──
  entries.push({
    keywords: [
      "skill", "tech", "technology", "stack", "tool",
      "programming", "language", "expertise",
      "proficient", "ability", "capable", "competency", "technical",
    ],
    answer: `Core Skills:\n${skills
      .map((s) => `• ${s.name} — ${s.level}%`)
      .join("\n")}\n\nAlso experienced with: ${additionalSkills.join(", ")}.`,
    priority: 2,
  });

  // ── Individual skill mentions (lower priority so skills list wins for broad queries) ──
  const allSkillNames = [...skills.map((s) => s.name), ...additionalSkills];
  allSkillNames.forEach((name) => {
    const lower = name.toLowerCase();
    entries.push({
      keywords: lower.split(/[\s,/]+/).filter(Boolean),
      answer: `Yes, ${personalInfo.name} has experience with ${name}.`,
      priority: 1,
    });
  });

  // ── Projects – overview (high priority, broad keywords) ──
  entries.push({
    keywords: [
      "project", "projects", "portfolio", "built", "created", "made",
      "developed", "works", "applications", "apps", "application",
    ],
    answer: `Here are all ${projects.length} projects by ${personalInfo.name}:\n\n${projects
      .map(
        (p, i) =>
          `${i + 1}. ${p.title}${p.featured ? " ⭐" : ""}\n   ${p.description}\n   Tech: ${p.tags.join(", ")}`
      )
      .join("\n\n")}`,
    priority: 2,
  });

  // ── Each project individually (lower priority — only wins when a specific project is named) ──
  projects.forEach((p) => {
    const titleWords = p.title
      .toLowerCase()
      .split(/[\s\-–]+/)
      .filter((w) => w.length > 3 && !STOP_WORDS.has(w));
    const tagKw = p.tags
      .map((t) => t.toLowerCase())
      .filter((t) => t.length > 3 && !STOP_WORDS.has(t));
    entries.push({
      keywords: [...titleWords, ...tagKw],
      answer: `📌 ${p.title}\n\n${p.description}\n\nTech stack: ${p.tags.join(", ")}`,
      priority: 1,
    });
  });

  // ── Contact ──
  entries.push({
    keywords: [
      "contact", "email", "phone", "location", "reach",
      "touch", "connect", "hire", "call",
      "address", "mail", "number", "city",
    ],
    answer: `You can reach ${personalInfo.name} at:\n• Email: ${contact.email}\n• Phone: ${contact.phone}\n• Location: ${contact.location}\n• GitHub: ${socialLinks.github}\n• LinkedIn: ${socialLinks.linkedin}`,
    priority: 2,
  });

  // ── Social ──
  entries.push({
    keywords: ["github", "linkedin", "social", "link", "profile", "account", "follow"],
    answer: `• GitHub: ${socialLinks.github}\n• LinkedIn: ${socialLinks.linkedin}`,
    priority: 2,
  });

  return entries;
}

/* ────────────────────────────────────────────────────────────── */
/*  Search the index for the best matching entry                  */
/* ────────────────────────────────────────────────────────────── */

const FALLBACK =
  "I can only provide information available on this portfolio. Try asking about Krishna's projects, skills, experience, education, certifications, or contact details!";

/**
 * Score how well a single query word matches a single keyword.
 * Returns 0 if no match, or a positive number indicating match quality.
 */
function wordMatchScore(word: string, sw: string, kw: string, sk: string): number {
  if (word === kw || sw === sk) return 10;                              // exact
  if (kw.length > 3 && word.includes(kw)) return 7;                   // word contains kw
  if (word.length > 3 && kw.includes(word)) return 7;                 // kw contains word
  if (sw.length > 3 && sk.length > 3 && sw === sk) return 8;          // stemmed exact
  if (sw.length > 3 && sk.length > 3 && (sw.includes(sk) || sk.includes(sw))) return 4;
  return 0;
}

function search(query: string, index: IndexEntry[]): string {
  // Normalise
  const q = query.toLowerCase().replace(/[?!.,;:'"]/g, "");
  const allWords = q.split(/\s+/).filter(Boolean);

  // Keep only meaningful words (filter stop words) for scoring
  const meaningful = allWords.filter((w) => !STOP_WORDS.has(w));
  // Fall back to all words if everything was filtered (e.g. "hi")
  const words = meaningful.length > 0 ? meaningful : allWords;
  const stemmedWords = words.map(stem);

  let bestScore = -1;
  let bestPriority = -1;
  let bestAnswer = "";

  for (const entry of index) {
    const stemmedKws = entry.keywords.map(stem);
    const entryPriority = entry.priority ?? 1;

    // For each query word, find its best-matching keyword in this entry
    let totalScore = 0;
    let matchedWords = 0;

    for (let wi = 0; wi < words.length; wi++) {
      const word = words[wi];
      const sw = stemmedWords[wi];
      let bestWordScore = 0;

      for (let ki = 0; ki < entry.keywords.length; ki++) {
        const s = wordMatchScore(word, sw, entry.keywords[ki], stemmedKws[ki]);
        if (s > bestWordScore) bestWordScore = s;
      }

      if (bestWordScore > 0) {
        totalScore += bestWordScore;
        matchedWords++;
      }
    }

    // Require at least one meaningful word to match
    if (matchedWords === 0) continue;

    // Normalise score relative to the number of meaningful words
    // (avoids long queries with many matches beating short precise ones)
    const normScore = totalScore / words.length;

    // Compare: prefer higher normScore; break ties by priority
    if (
      normScore > bestScore ||
      (normScore === bestScore && entryPriority > bestPriority)
    ) {
      bestScore = normScore;
      bestPriority = entryPriority;
      bestAnswer = entry.answer;
    }
  }

  // Threshold: a normalised score >= 3 means at least one solid keyword match
  return bestScore >= 3 ? bestAnswer : FALLBACK;
}

/* ────────────────────────────────────────────────────────────── */
/*  Suggested quick-action chips                                  */
/* ────────────────────────────────────────────────────────────── */

const SUGGESTIONS = [
  "About Krishna",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];

/* ────────────────────────────────────────────────────────────── */
/*  Component                                                     */
/* ────────────────────────────────────────────────────────────── */

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: `Hi! I'm ${personalInfo.name}'s portfolio assistant. Ask me anything about the portfolio — projects, skills, experience, and more!`,
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const indexRef = useRef<IndexEntry[]>(buildIndex());

  // Auto-scroll on new messages
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;

    const reply = search(msg, indexRef.current);

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: msg },
      { sender: "bot", text: reply },
    ]);
    setInput("");
  };

  return (
    <>
      {/* ── Floating toggle button ── */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-50 p-4 rounded-2xl shadow-lg
          bg-gradient-to-br from-indigo-600 to-purple-600
          hover:from-indigo-700 hover:to-purple-700
          text-white transition-all duration-300 hover:shadow-xl
          hover:scale-105 active:scale-95"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* ── Chat window ── */}
      <div
        className={`fixed bottom-20 right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-96
          flex flex-col rounded-3xl shadow-2xl border border-indigo-100/50
          backdrop-blur-xl bg-white/90
          transition-all duration-300 origin-bottom-right
          ${isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"}`}
        style={{ height: "min(32rem, calc(100vh - 7rem))" }}
      >
        {/* ── Header ── */}
        <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-3xl">
          <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
            <Bot size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-['Poppins'] font-semibold text-sm leading-tight truncate">
              Kris
            </h3>
            <span className="text-white/70 font-['Poppins'] text-xs">
              Ask me anything about the portfolio
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg hover:bg-white/20 text-white/80 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* ── Messages ── */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-end gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
            >
              {msg.sender === "bot" && (
                <div className="flex-shrink-0 p-1.5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                  <Bot size={14} className="text-indigo-600" />
                </div>
              )}

              <div
                className={`max-w-[80%] px-4 py-2.5 text-sm font-['Poppins'] leading-relaxed whitespace-pre-line
                  ${msg.sender === "user"
                    ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl rounded-br-md shadow-md"
                    : "bg-gradient-to-br from-indigo-50/80 to-purple-50/80 text-gray-800 rounded-2xl rounded-bl-md border border-indigo-100/60 shadow-sm"
                  }`}
              >
                {msg.text}
              </div>

              {msg.sender === "user" && (
                <div className="flex-shrink-0 p-1.5 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg">
                  <User size={14} className="text-white" />
                </div>
              )}
            </div>
          ))}

          {/* Quick suggestions (show only when there's just the welcome message) */}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="px-3 py-1.5 text-xs font-['Poppins'] font-medium
                    bg-gradient-to-br from-indigo-50 to-purple-50
                    text-indigo-700 rounded-xl border border-indigo-100
                    hover:from-indigo-100 hover:to-purple-100
                    transition-all active:scale-95"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Input bar ── */}
        <div className="px-4 py-3 border-t border-indigo-100/50">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about projects, skills…"
              className="flex-1 px-4 py-2.5 text-sm font-['Poppins']
                bg-gradient-to-br from-indigo-50/50 to-purple-50/50
                border border-indigo-100 rounded-xl
                placeholder:text-gray-400 text-gray-800
                focus:outline-none focus:ring-2 focus:ring-indigo-400/40
                transition-all"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim()}
              className="p-2.5 rounded-xl
                bg-gradient-to-br from-indigo-600 to-purple-600
                hover:from-indigo-700 hover:to-purple-700
                text-white shadow-md hover:shadow-lg
                transition-all disabled:opacity-40 disabled:cursor-not-allowed
                active:scale-95"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
