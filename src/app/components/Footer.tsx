import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-8 md:p-12 shadow-lg border border-indigo-100/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-['Playfair_Display'] font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
                Krishna Raj BR
              </h3>
              <p className="text-gray-600 font-['Poppins'] text-sm leading-relaxed">
                Creating beautiful, functional web experiences with modern technologies and clean design.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-['Poppins'] font-semibold text-gray-800 mb-3">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link to="/" className="text-gray-600 hover:text-indigo-600 font-['Poppins'] text-sm transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-indigo-600 font-['Poppins'] text-sm transition-colors">
                  About
                </Link>
                <Link to="/projects" className="text-gray-600 hover:text-indigo-600 font-['Poppins'] text-sm transition-colors">
                  Projects
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-indigo-600 font-['Poppins'] text-sm transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-['Poppins'] font-semibold text-gray-800 mb-3">Connect With Me</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Krishnaraj7710"
                  className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-xl text-indigo-600 transition-all shadow-sm hover:shadow-md"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/Kris"
                  className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-xl text-indigo-600 transition-all shadow-sm hover:shadow-md"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-xl text-indigo-600 transition-all shadow-sm hover:shadow-md"
                >
                  <Twitter size={20} />
                </a>
                
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </footer>
  );
}
