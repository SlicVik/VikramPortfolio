import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projects = [
    {
      name: "Brain Sleep Dashboard",
      period: "Jan 2025 – Aug 2025",
      description:
        "Contributed to the development of an interactive data visualization dashboard examining the link between sleep deprivation and mental health using brain signal data and national survey health data. Built feature components to display brain activity, mood, demographic trends, and test reaction times.",
      github: "https://github.com/SlicVik/eeg-nhis-app",
    },
    {
      name: "Medical Paper Simplifier",
      period: "2024",
      description:
        "An LLM-powered web application that automatically scans complex medical research PDFs to identify and simplify jargon like diseases, chemicals, and genes. Utilizes a dual-model architecture, combining SciSpacy for precise entity recognition and a custom fine-tuned Qwen 2.5-1.5B LLM to generate simplified definitions tailored to the user's knowledge level. Built with a Flask backend and vanilla HTML/JS frontend.",
      github: "https://github.com/SlicVik",
    },
    {
      name: "Multi-Model Exploration of Depression Risk",
      period: "Jan 2025 – May 2025",
      description:
        "This project investigates the use of machine learning to predict depression severity based on self-reported mental health assessments and demographic features. We developed a supervised learning pipeline to classify individuals into depression severity categories and to estimate PHQ-9 total scores using models such as logistic regression, random forest, and support vector machines.",
      github: "https://github.com/SlicVik",
    },
    {
      name: "This Website",
      period: "2025",
      description:
        "A professional portfolio website built with React, TypeScript, and Tailwind CSS. Features an interactive timeline visualization, GitHub activity integration, responsive design with dark mode support, and smooth scroll animations. Showcases projects, technical skills, and professional experience with a warm, modern design system.",
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

        {/* Key Projects Carousel */}
        <div>
          <h3 className="text-2xl font-light mb-8 text-center text-foreground">
            Featured Projects
          </h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-card border border-border rounded-full hover:bg-accent hover:shadow-lg transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            <button
              onClick={() => setCurrentProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-card border border-border rounded-full hover:bg-accent hover:shadow-lg transition-all"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Project Card */}
            <div className="overflow-hidden">
              <div
                key={currentProjectIndex}
                className="p-8 bg-card border border-border rounded-lg shadow-lg animate-fade-in"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-normal text-2xl text-foreground">
                    {projects[currentProjectIndex].name}
                  </h4>
                  <a
                    href={projects[currentProjectIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {projects[currentProjectIndex].period}
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  {projects[currentProjectIndex].description}
                </p>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProjectIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentProjectIndex
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
