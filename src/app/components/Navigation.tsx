import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl px-6 py-4 shadow-lg border border-white/20">
          <div className="flex items-center justify-between">
            <div className="text-xl text-white">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-white transition-all backdrop-blur-sm border border-white/30"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white/80 hover:text-white transition-colors text-left py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-white/80 hover:text-white transition-colors text-left py-2"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white/80 hover:text-white transition-colors text-left py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-white transition-all backdrop-blur-sm border border-white/30 text-left"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
