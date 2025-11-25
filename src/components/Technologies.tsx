import { Code2, Database, Cloud, Lock, GitBranch, Cpu, Brain, Globe } from "lucide-react";

const Technologies = () => {
  const technologies = [
    { name: "Python", icon: Code2 },
    { name: "C#", icon: Code2 },
    { name: "JavaScript", icon: Code2 },
    { name: "C/C++", icon: Code2 },
    { name: "SQL", icon: Database },
    { name: "NoSQL", icon: Database },
    { name: "HTML/CSS", icon: Globe },
    { name: "MongoDB", icon: Database },
    { name: "Google Cloud Platform", icon: Cloud },
    { name: "Prisma", icon: Database },
    { name: "Auth0", icon: Lock },
    { name: "Git", icon: GitBranch },
    { name: "React", icon: Code2 },
    { name: "Node.js", icon: Cpu },
    { name: "Flask", icon: Code2 },
    { name: "Playwright", icon: Code2 },
    { name: "Gen AI APIs", icon: Brain },
    { name: "Pandas", icon: Database },
    { name: "NumPy", icon: Cpu },
    { name: "Matplotlib", icon: Code2 },
    { name: "Altair", icon: Code2 },
    { name: "TensorFlow", icon: Brain },
    { name: "OAuth", icon: Lock },
    { name: "Scikit-learn", icon: Brain },
  ];

  return (
    <section id="technologies" className="py-20 px-6 animate-slide-left">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light mb-16 text-center text-foreground">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-lg hover:shadow-lg hover:border-primary/50 transition-all hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-light text-foreground">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
