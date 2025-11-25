import { GitHubCalendar } from "react-github-calendar";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Brain Sleep Dashboard",
      period: "Jan 2025 – Aug 2025",
      description:
        "Contributed to the development of an interactive data visualization dashboard examining the link between sleep deprivation and mental health using brain signal data and national survey health data. Built feature components to display brain activity, mood, demographic trends, and test reaction times.",
      github: "https://github.com/SlicVik/eeg-nhis-app",
    },
    {
      name: "Multi-Model Exploration of Depression Risk",
      period: "Jan 2025 – May 2025",
      description:
        "This project investigates the use of machine learning to predict depression severity based on self-reported mental health assessments and demographic features. We developed a supervised learning pipeline to classify individuals into depression severity categories and to estimate PHQ-9 total scores using models such as logistic regression, random forest, and support vector machines.",
      github: "https://github.com/SlicVik",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-card/30 animate-slide-right">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light mb-16 text-center text-foreground">
          Projects & Contributions
        </h2>

        {/* GitHub Heatmap */}
        <div className="mb-16 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <Github className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-light text-foreground">
              GitHub Activity
            </h3>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border overflow-x-auto w-full">
            <GitHubCalendar
              username="SlicVik"
              colorScheme="light"
              blockSize={12}
              fontSize={14}
            />
          </div>
        </div>

        {/* Key Projects */}
        <div>
          <h3 className="text-2xl font-light mb-8 text-center text-foreground">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-normal text-lg text-foreground">
                    {project.name}
                  </h4>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.period}
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
