import { Code2, Database, Palette, Server } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

const skills: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Python', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 88, category: 'backend' },
  { name: 'UI/UX Design', level: 85, category: 'design' },
  { name: 'Figma', level: 90, category: 'design' },
];

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  design: Palette,
  tools: Database,
};

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = categoryIcons[skill.category];
            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 group-hover:bg-white/30 transition-all">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-white/70 text-sm">{skill.level}%</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-8 backdrop-blur-xl bg-white/10 rounded-2xl p-6 shadow-xl border border-white/20">
          <h3 className="text-white text-lg mb-4">Also experienced with:</h3>
          <div className="flex flex-wrap gap-3">
            {['Git', 'Docker', 'AWS', 'REST APIs', 'GraphQL', 'MongoDB', 'Redux', 'Jest'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/20 rounded-xl text-white/90 text-sm backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
