import { Award, Briefcase, Code2, GraduationCap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'Python', level: 90 },
  { name: 'Flask', level: 85 },
  { name: 'TensorFlow / CNN', level: 80 },
  { name: 'HTML, CSS, JavaScript', level: 88 },
  { name: 'Cloud Cognitive Services', level: 80 },
  { name: 'Machine Learning', level: 78 },
  { name: 'UI/UX Design Basics', level: 70 },
];
  

export function AboutPage() {
  return (
    <div className="min-h-screen px-4 pt-32 pb-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 font-['Poppins'] max-w-3xl mx-auto leading-relaxed">
            I am an aspiring Computer Science and Engineering graduate specializing in
            Web Development and AI-driven solutions. I enjoy transforming ideas into
            functional web applications and smart systems that enhance accessibility
            and user experience. With hands-on experience in cloud-native services,
            machine learning, and full-stack development, I aim to contribute to
            innovative and impactful digital products.
          </p>
        </div>

        {/* Bio Section */}
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-100/50 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Story */}
            <div>
              <h2 className="text-3xl font-['Playfair_Display'] font-bold text-gray-900 mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-gray-600 font-['Poppins'] leading-relaxed">
                <p>
                  Hello! I'm Krishna Raj BR, a Computer Science Engineering student
                  passionate about building modern web applications and intelligent systems.
                </p>
                <p>
                  My interests lie in Artificial Intelligence, Machine Learning, and Web Development.
                  I have worked on real-world projects like AI-powered Sign Language Recognition
                  and Smart Healthcare Management systems, aiming to create technology that
                  improves accessibility and everyday life.
                </p>
                <p>
                  Beyond coding, I enjoy leadership roles, creative design work, and
                  collaborating on projects that blend innovation with social impact.
                </p>
              </div>
            </div>

            {/* Experience & Education */}
            <div className="space-y-6">

              <div className="backdrop-blur-xl bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Briefcase className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h2 className="font-['Playfair_Display'] font-bold text-gray-900 mb-1">
                      Software Intern
                    </h2>
                    <p className="font-semibold text-gray-600 font-['Poppins'] mb-2">
                      JHF IT Innovations Pvt Ltd.
                    </p>
                    <p className="text-sm text-gray-600 font-['Poppins']">
                      Worked as an intern at JHF IT Innovations Pvt Ltd, gaining practical experience in
software development by assisting with real-world projects
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <GraduationCap className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h2 className="font-['Playfair_Display'] font-bold text-gray-900 mb-1">
                      B.Tech Computer Science & Engineering
                    </h2>
                    <p className="font-semibold text-gray-600 font-['Poppins'] mb-2">
                      Mohandas College of Engineering & Technology (2022–2026)
                    </p>
                    <p className="text-sm text-gray-600 font-['Poppins']">
                      Specializing in AI systems, web development, and cloud technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Award className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h2 className="font-['Playfair_Display'] font-bold text-gray-900 mb-1">
                      Certifications & Training
                    </h2>
                    <p className="text-sm text-gray-600 font-['Poppins']">
                      Python Full Stack Development • Cloud Native AI Services Training
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-100/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
              <Code2 className="text-indigo-600" size={24} />
            </div>
            <h2 className="text-3xl font-['Playfair_Display'] font-bold text-gray-900">
              Skills & Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-['Poppins'] font-medium text-gray-900">
                    {skill.name}
                  </span>
                  <span className="font-['Poppins'] text-sm text-indigo-600 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-indigo-100">
            <h3 className="font-['Poppins'] font-semibold text-gray-900 mb-4">
              Also experienced with:
            </h3>
            <div className="flex flex-wrap gap-3">
              {['OpenCV', 'NFC Systems', 'Cloud APIs', 'REST APIs', 'Team Leadership', 'Problem Solving'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl text-indigo-700 font-['Poppins'] text-sm border border-indigo-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
