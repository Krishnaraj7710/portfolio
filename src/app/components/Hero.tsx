import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-white/20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAyNjM1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl object-cover border-4 border-white/30 shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-white/90 text-sm mb-4 backdrop-blur-sm border border-white/30">
                👋 Welcome to my portfolio
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Alex Johnson</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-6">
                Full Stack Web Developer
              </p>
              
              <p className="text-white/70 text-lg mb-8 max-w-2xl">
                I craft beautiful, functional websites and applications with modern technologies. 
                Passionate about creating exceptional user experiences and clean, maintainable code.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-xl text-white transition-all backdrop-blur-sm border border-white/30"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-xl text-white transition-all backdrop-blur-sm border border-white/30"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-xl text-white transition-all backdrop-blur-sm border border-white/30"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
