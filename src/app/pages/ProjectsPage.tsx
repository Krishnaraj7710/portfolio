import { ExternalLink, Github } from 'lucide-react';
import logDashboardImg from '../../assets/projects/log_dashboard.png';
import signLanguageImg from '../../assets/projects/sign_language.png';
import NFCImg from '../../assets/projects/NFC_Image.png';
import aichatbotImg from '../../assets/projects/ai_chatbot.png';
import soundfrequencyImg from '../../assets/projects/sound_frequency.png';
import webportfolioImg from '../../assets/projects/web_portfolio.png';
import calculatorImg from '../../assets/projects/calculator.png';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
  
  {
    title: 'Web-Based Sign Language Recognition System',
    description:
      'An AI-powered system that translates hand gestures into real-time English text using Convolutional Neural Networks. Designed to assist deaf and hard-of-hearing students with accessible communication through a responsive web interface.',
    image: signLanguageImg,
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'Machine Learning'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'NFC-Based Smart Healthcare Management System',
    description:
      'A smart medical DigiLocker system that uses NFC technology to provide instant access to secure medical records. Includes emergency access features and AI-assisted healthcare data management.',
    image: NFCImg,
    tags: ['Web Development', 'NFC Technology', 'AI Systems', 'Healthcare Tech'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },

  // 📁 MORE PROJECTS
  {
    title: 'AI-Powered College FAQ Chatbot',
    description:
      'A conversational AI chatbot built to answer student queries about courses, admissions, and campus facilities using Natural Language Processing. Designed to automate college support systems.',
    image: aichatbotImg,
    tags: ['AI', 'NLP', 'Chatbot', 'Python', 'Web Application'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Sound Frequency Detection & Analysis System',
    description:
      'A real-time sound monitoring system that detects abnormal frequency patterns using signal processing techniques and visualizes the data for analysis and anomaly detection.',
    image: soundfrequencyImg,
    tags: ['Signal Processing', 'Python', 'Data Visualization', 'Audio Analysis'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Dynamic Portfolio Builder Web App',
    description:
      'A web application that allows users to create professional multi-page portfolios with customizable sections, themes, and live previews.',
    image: soundfrequencyImg,
    tags: ['Web Development', 'React', 'Flask', 'UI/UX'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Log Data Visualization Dashboard',
    description:
      'An interactive dashboard built to visualize real-time data using charts and graphs, helping in understanding trends and abnormal behaviors in datasets.',
    image: logDashboardImg,

    tags: ['Data Visualization', 'Python', 'Charts', 'Web Dashboard'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
  title: 'Smart Calculator Web Application',
  description:
    'A responsive web-based calculator developed using HTML, CSS, and JavaScript that performs real-time arithmetic operations with a clean and intuitive user interface. Designed with modern UI principles, smooth interaction, and dynamic expression evaluation.',
  image: calculatorImg,
  tags: ['HTML', 'CSS', 'JavaScript', 'Web App', 'UI Design'],
  liveUrl: '#',
  githubUrl: '#',
},



  
];

export function ProjectsPage() {
  return (
    <div className="min-h-screen px-4 pt-32 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 font-['Poppins'] max-w-3xl mx-auto leading-relaxed">
            A selection of AI-driven systems, web applications, and technology projects showcasing my skills in Machine Learning, Cloud Services, and Modern Web Development.

          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-['Playfair_Display'] font-bold text-gray-900 mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/80 rounded-3xl overflow-hidden shadow-xl border border-indigo-100/50 hover:shadow-2xl transition-all group"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-['Playfair_Display'] font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 font-['Poppins'] mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg text-indigo-700 font-['Poppins'] text-sm border border-indigo-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl text-white font-['Poppins'] text-sm transition-all shadow-md hover:shadow-lg"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-900 font-['Poppins'] text-sm transition-all"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-2xl font-['Playfair_Display'] font-bold text-gray-900 mb-8">
            More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/80 rounded-2xl overflow-hidden shadow-lg border border-indigo-100/50 hover:shadow-xl transition-all group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-['Playfair_Display'] font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 font-['Poppins'] text-sm mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg text-indigo-700 font-['Poppins'] text-xs border border-indigo-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                      <a
                        href={project.liveUrl}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg text-white font-['Poppins'] text-sm transition-all"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-900 transition-all"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
