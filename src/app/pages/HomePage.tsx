import { Link } from "react-router-dom";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import profilePic from "../../assets/profile.jpg"; // ✅ Correct image import

export function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full text-indigo-600 font-['Poppins'] text-sm mb-6 border border-indigo-100">
              <Sparkles size={16} />
              Welcome to my portfolio
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Krishna Raj BR
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 font-['Poppins'] font-medium mb-4">
              Computer Science Engineer | Web Developer | AI Enthusiast
            </p>

            <p className="text-lg text-gray-600 font-['Poppins'] mb-8 leading-relaxed max-w-xl">
              I build modern, user-focused web applications and intelligent
              systems that solve real-world problems. Passionate about combining
              creativity with technology to design meaningful digital experiences.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl text-white font-['Poppins'] font-medium transition-all shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 rounded-xl text-gray-900 font-['Poppins'] font-medium transition-all shadow-md hover:shadow-lg border border-gray-200"
              >
                <Code2 size={20} />
                Get in Touch
              </Link>
            </div>

            
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2">
            <div className="relative">

              {/* Glow Effects */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-3xl blur-3xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl blur-3xl opacity-50"></div>

              {/* Glass Card */}
              <div className="relative backdrop-blur-xl bg-white/80 rounded-3xl p-4 shadow-2xl border border-indigo-100/50">
                <img
                  src={profilePic}
                  alt="Krishna Raj BR"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
