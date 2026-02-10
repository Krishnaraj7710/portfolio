import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

/* ---------------- Structured Portfolio Knowledge ---------------- */
const portfolioKnowledge = `
You are an AI assistant for Krishna Raj BR.

### Personal Info
- Final Year B.Tech Computer Science student
- Specializes in AI and Web Development

### Projects
1. Sign Language Recognition System
   - Tech: Python, TensorFlow, OpenCV, CNN
   - Purpose: Converts hand gestures into real-time text

2. NFC Smart Healthcare System
   - Tech: Web App, NFC, AI Data Processing
   - Purpose: Secure medical DigiLocker

3. AI College FAQ Chatbot
   - Tech: Python, NLP

4. Sound Frequency Detection System
   - Tech: Python, Signal Processing

5. Portfolio Builder Web App
   - Tech: React, UI/UX

6. Log Data Visualization Dashboard
   - Tech: Data Visualization

### Skills
Python, Machine Learning, TensorFlow, OpenCV, React, AI Systems, Web Development

### Career Goal
Interested in AI, ML, and Full Stack roles.
`;

/* ---------------- Types ---------------- */
interface Message {
  sender: "user" | "bot";
  text: string;
}

/* ---------------- Intent Detection ---------------- */
const detectIntent = (q: string) => {
  q = q.toLowerCase();
  if (q.includes("project")) return "PROJECT";
  if (q.includes("skill") || q.includes("tech")) return "SKILL";
  if (q.includes("sign language")) return "SLR";
  if (q.includes("healthcare") || q.includes("nfc")) return "HEALTH";
  if (q.includes("hire") || q.includes("job")) return "JOB";
  return "GENERAL";
};

/* ---------------- Fallback AI ---------------- */
const getBotReply = (q: string) => {
  q = q.toLowerCase();
  if (q.includes("sign language"))
    return "The Sign Language system uses CNN and OpenCV to convert gestures into text.";
  if (q.includes("skill"))
    return "Krishna works with Python, Machine Learning, TensorFlow, React, and AI systems.";
  if (q.includes("healthcare"))
    return "The NFC healthcare system securely stores medical records using NFC cards.";
  if (q.includes("experience"))
    return "Krishna has built AI, web, and signal processing systems through academic and internship projects.";
  return "Ask me about his projects, skills, or AI work!";
};

/* ---------------- Component ---------------- */
export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! I'm Krishna's AI Assistant 🤖" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    const intent = detectIntent(userMessage);

    setMessages(prev => [...prev, { sender: "user", text: userMessage }]);
    setInput("");

    try {
      const key = import.meta.env.VITE_OPENAI_KEY;
      if (!key) throw new Error("No API key");

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: portfolioKnowledge },
            { role: "system", content: `User intent: ${intent}` },
            ...messages.map(m => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text
            })),
            { role: "user", content: userMessage }
          ],
        }),
      });

      const data = await response.json();
      if (!data.choices) throw new Error("API fail");

      const reply = data.choices[0].message.content;
      setMessages(prev => [...prev, { sender: "bot", text: reply }]);

    } catch {
      const fallbackReply = getBotReply(userMessage);
      setMessages(prev => [...prev, { sender: "bot", text: fallbackReply }]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col z-50">
          <div className="bg-indigo-600 text-white p-3 rounded-t-xl font-semibold">
            Krishna's AI Assistant
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded ${
                  msg.sender === "user" ? "bg-indigo-100 self-end" : "bg-gray-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              className="flex-1 border rounded p-2 text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-indigo-600 text-white px-3 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
