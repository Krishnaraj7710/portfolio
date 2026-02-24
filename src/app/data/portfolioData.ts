// ──────────────────────────────────────────────────────────────
// Centralized portfolio data – the single source of truth.
// The chatbot (and any other component) reads from here so
// answers always stay consistent when the site is updated.
// ──────────────────────────────────────────────────────────────

/* ───── Personal / Hero ───── */
export const personalInfo = {
  name: "Krishna Raj BR",
  title: "Computer Science Engineer | Web Developer | AI Enthusiast",
  bio: "I build modern, user-focused web applications and intelligent systems that solve real-world problems. Passionate about combining creativity with technology to design meaningful digital experiences.",
};

/* ───── About ───── */
export const about = {
  summary:
    "I am an aspiring Computer Science and Engineering graduate specializing in Web Development and AI-driven solutions. I enjoy transforming ideas into functional web applications and smart systems that enhance accessibility and user experience. With hands-on experience in cloud-native services, machine learning, and full-stack development, I aim to contribute to innovative and impactful digital products.",
  story: [
    "Hello! I'm Krishna Raj BR, a Computer Science Engineering student passionate about building modern web applications and intelligent systems.",
    "My interests lie in Artificial Intelligence, Machine Learning, and Web Development. I have worked on real-world projects like AI-powered Sign Language Recognition and Smart Healthcare Management systems, aiming to create technology that improves accessibility and everyday life.",
    "Beyond coding, I enjoy leadership roles, creative design work, and collaborating on projects that blend innovation with social impact.",
  ],
};

/* ───── Experience ───── */
export interface Experience {
  role: string;
  company: string;
  description: string;
}

export const experience: Experience[] = [
  {
    role: "Software Intern",
    company: "JHF IT Innovations Pvt Ltd.",
    description:
      "Worked as an intern at JHF IT Innovations Pvt Ltd, gaining practical experience in software development by assisting with real-world projects.",
  },
];

/* ───── Education ───── */
export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "B.Tech Computer Science & Engineering",
    institution: "Mohandas College of Engineering & Technology",
    period: "2022–2026",
    description:
      "Specializing in AI systems, web development, and cloud technologies.",
  },
];

/* ───── Certifications ───── */
export const certifications: string[] = [
  "Python Full Stack Development",
  "Cloud Native AI Services Training",
];

/* ───── Skills ───── */
export interface Skill {
  name: string;
  level: number;
}

export const skills: Skill[] = [
  { name: "Python", level: 90 },
  { name: "Flask", level: 85 },
  { name: "TensorFlow / CNN", level: 80 },
  { name: "HTML, CSS, JavaScript", level: 88 },
  { name: "Cloud Cognitive Services", level: 80 },
  { name: "Machine Learning", level: 78 },
  { name: "UI/UX Design Basics", level: 70 },
];

export const additionalSkills: string[] = [
  "OpenCV",
  "NFC Systems",
  "Cloud APIs",
  "REST APIs",
  "Team Leadership",
  "Problem Solving",
];

/* ───── Projects ───── */
export interface Project {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Web-Based Sign Language Recognition System",
    description:
      "An AI-powered system that translates hand gestures into real-time English text using Convolutional Neural Networks. Designed to assist deaf and hard-of-hearing students with accessible communication through a responsive web interface.",
    tags: ["Python", "TensorFlow", "OpenCV", "Flask", "Machine Learning"],
    featured: true,
  },
  {
    title: "NFC-Based Smart Healthcare Management System",
    description:
      "A smart medical DigiLocker system that uses NFC technology to provide instant access to secure medical records. Includes emergency access features and AI-assisted healthcare data management.",
    tags: ["Web Development", "NFC Technology", "AI Systems", "Healthcare Tech"],
    featured: true,
  },
  {
    title: "AI-Powered College FAQ Chatbot",
    description:
      "A conversational AI chatbot built to answer student queries about courses, admissions, and campus facilities using Natural Language Processing. Designed to automate college support systems.",
    tags: ["AI", "NLP", "Chatbot", "Python", "Web Application"],
  },
  {
    title: "Sound Frequency Detection & Analysis System",
    description:
      "A real-time sound monitoring system that detects abnormal frequency patterns using signal processing techniques and visualizes the data for analysis and anomaly detection.",
    tags: ["Signal Processing", "Python", "Data Visualization", "Audio Analysis"],
  },
  {
    title: "Dynamic Portfolio Builder Web App",
    description:
      "A web application that allows users to create professional multi-page portfolios with customizable sections, themes, and live previews.",
    tags: ["Web Development", "React", "Flask", "UI/UX"],
  },
  {
    title: "Log Data Visualization Dashboard",
    description:
      "An interactive dashboard built to visualize real-time data using charts and graphs, helping in understanding trends and abnormal behaviors in datasets.",
    tags: ["Data Visualization", "Python", "Charts", "Web Dashboard"],
  },
  {
    title: "Smart Calculator Web Application",
    description:
      "A responsive web-based calculator developed using HTML, CSS, and JavaScript that performs real-time arithmetic operations with a clean and intuitive user interface.",
    tags: ["HTML", "CSS", "JavaScript", "Web App", "UI Design"],
  },
];

/* ───── Contact ───── */
export const contact = {
  email: "krishnarajbr.work@gmail.com",
  phone: "9495192853",
  location: "Trivandrum, Kerala, India",
};

/* ───── Social Links ───── */
export const socialLinks = {
  github: "https://github.com/Krishnaraj7710",
  linkedin: "https://www.linkedin.com/in/krishna-raj-br-4a4ba53b1",
};
