import { useState, useEffect, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Code,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const projects = [
    {
      name: "Medical Paper Simplifier",
      period: "Nov 2025",
      tags: "ML • LLM • Flask",
      description:
        "An LLM-powered web application that automatically scans complex medical research PDFs to identify and simplify jargon like diseases, chemicals, and genes. Utilizes a dual-model architecture, combining SciSpacy for precise entity recognition and a custom fine-tuned Qwen 2.5-1.5B LLM.",
      github: "https://github.com/SlicVik/Medical-Paper-Simplifier",
      video: "/Med_Simplifier_Demo.mp4",
    },
    {
      name: "Brain Sleep Dashboard",
      period: "Jan 2025 – Aug 2025",
      tags: "Streamlit • Pandas • Numpy • Data Viz",
      description:
        "Contributed to the development of an interactive data visualization dashboard examining the link between sleep deprivation and mental health using brain signal data and national survey health data. Built feature components to display brain activity, mood, demographic trends, and test reaction times.",
      github: "https://github.com/SlicVik/eeg-nhis-app",
      video: "/eeg_nhis_demo.mp4",
    },
    {
      name: "Depression Risk Model",
      period: "Jan 2025 – May 2025",
      tags: "ML • Pandas • Numpy • Data Viz",
      description:
        "This project investigates the use of machine learning to predict depression severity based on self-reported mental health assessments. Developed a supervised learning pipeline to classify individuals into severity categories using logistic regression, random forest, and SVMs.",
      github: "https://github.com/aparker03/depression-risk-modeling",
      video: "",
    },
    {
      name: "This Website",
      period: "2025",
      tags: "React • Tailwind • TypeScript",
      description:
        "A professional portfolio website built with React, TypeScript, and Tailwind CSS. Features an interactive timeline visualization, GitHub activity integration, responsive design with dark mode support, and smooth scroll animations.",
      github: "https://github.com/SlicVik",
      video: "",
    },
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  // Scroll Observer for Video Autoplay
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Play when visible
          videoElement.play().catch((error) => {
            console.log("Autoplay prevented:", error);
          });
        } else {
          // Pause when not visible
          videoElement.pause();
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [currentProjectIndex]); // Re-run effect when project changes (though key prop handles remount)

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-card/30 animate-slide-right"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Projects & Contributions</SectionTitle>

        {/* GitHub Heatmap */}
        <div className="mb-24 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <Github className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-light text-foreground">
              GitHub Activity
            </h3>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border w-full flex justify-center overflow-x-auto hover:border-primary/50 transition-colors shadow-sm">
            <GitHubCalendar
              username="SlicVik"
              colorScheme="light"
              blockSize={12}
              fontSize={14}
            />
          </div>
        </div>

        {/* Featured Projects - Split Feature Layout */}
        <div className="relative">
          <h3 className="text-2xl font-light mb-12 text-center text-foreground">
            Featured Projects
          </h3>

          {/* The key prop here forces React to re-render this block when the index changes,
            triggering the 'animate-fade-in' animation every time you switch projects.
          */}
          <div
            key={currentProjectIndex}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in"
          >
            {/* Text Content Side */}
            <div className="order-2 md:order-1 space-y-6">
              <div className="inline-block">
                <span className="text-5xl font-light text-primary/20 select-none">
                  0{currentProjectIndex + 1}
                </span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {projects[currentProjectIndex].name}
                </h2>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  {projects[currentProjectIndex].period} •{" "}
                  {projects[currentProjectIndex].tags}
                </p>
              </div>

              <p className="text-base md:text-lg text-foreground/80 leading-relaxed min-h-[100px]">
                {projects[currentProjectIndex].description}
              </p>

              <div className="flex items-center gap-4 pt-4">
                {/* Code Button */}
                <a
                  href={projects[currentProjectIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground font-bold text-sm hover:bg-foreground hover:text-background transition-colors rounded-md"
                >
                  <Code className="w-4 h-4" />
                  Code
                </a>

                {/* Navigation Controls */}
                <div className="flex gap-2 ml-auto md:ml-4">
                  <button
                    onClick={prevProject}
                    className="p-3 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all shadow-sm"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="p-3 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all shadow-sm"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Video/Visual Side */}
            <div className="order-1 md:order-2">
              <div className="rounded-xl overflow-hidden shadow-xl border border-border bg-card relative group aspect-video">
                {projects[currentProjectIndex].name === "This Website" ? (
                  <div className="w-full h-full bg-gradient-to-br from-muted/50 to-card flex flex-col items-center justify-center relative p-8 text-center">
                    {/* Abstract Grid Pattern Background */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, currentColor 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <h3 className="text-3xl font-light text-primary mb-2 relative z-10">
                      Look Around!
                    </h3>
                    <p className="text-sm text-muted-foreground relative z-10">
                      You're already experiencing the demo.
                    </p>
                  </div>
                ) : projects[currentProjectIndex].name ===
                  "Depression Risk Model" ? (
                  <div className="w-full h-full bg-gradient-to-br from-muted/50 to-card flex flex-col items-center justify-center relative p-8 text-center">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, currentColor 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <h3 className="text-3xl font-light text-primary mb-2 relative z-10">
                      No Demo Available
                    </h3>
                    <p className="text-sm text-muted-foreground relative z-10">
                      Source code is available with the click of a button
                    </p>
                  </div>
                ) : projects[currentProjectIndex].video ? (
                  <video
                    ref={videoRef}
                    src={projects[currentProjectIndex].video}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    controls
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-muted/50 to-card flex items-center justify-center relative">
                    {/* Abstract Grid Pattern Background */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, currentColor 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Play Button Visual (Placeholder for actual video) */}
                    <div className="w-20 h-20 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-border group-hover:scale-110 group-hover:border-primary transition-all duration-300 cursor-pointer">
                      <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary border-b-[12px] border-b-transparent ml-1"></div>
                    </div>

                    <span className="absolute bottom-4 text-xs font-mono text-muted-foreground">
                      Demo Preview
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
