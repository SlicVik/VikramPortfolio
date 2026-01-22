import { useState, useRef, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Github, Code, X } from "lucide-react";
import SectionTitle from "./SectionTitle";

type Category = "all" | "data-science" | "website-dev" | "mobile-app";

interface Project {
  name: string;
  period: string;
  tags: string;
  description: string;
  github: string;
  video: string;
  category: Category;
  image?: string;
  imageBackground?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const projects: Project[] = [
    {
      name: "Medical Paper Simplifier",
      period: "Nov 2025",
      tags: "ML • LLM • Flask",
      description:
        "An LLM-powered web application that automatically scans complex medical research PDFs to identify and simplify jargon like diseases, chemicals, and genes. Utilizes a dual-model architecture, combining SciSpacy for precise entity recognition and a custom fine-tuned Qwen 2.5-1.5B LLM.",
      github: "https://github.com/SlicVik/Medical-Paper-Simplifier",
      video: "/Med_Simplifier_Demo.mp4",
      category: "data-science",
      image: "/minipic/papersimp_minipic.png",
      imageBackground: "#0a1628",
    },
    {
      name: "Brain Sleep Dashboard",
      period: "Jan 2025 – Aug 2025",
      tags: "Streamlit • Pandas • Numpy • Data Viz",
      description:
        "Contributed to the development of an interactive data visualization dashboard examining the link between sleep deprivation and mental health using brain signal data and national survey health data. Built feature components to display brain activity, mood, demographic trends, and test reaction times.",
      github: "https://github.com/SlicVik/eeg-nhis-app",
      video: "/eeg_nhis_demo.mp4",
      category: "data-science",
      image: "/minipic/eegnhis_minipic.png",
      imageBackground: "#1a1a1a",
    },
    {
      name: "Depression Risk Model",
      period: "Jan 2025 – May 2025",
      tags: "ML • Pandas • Numpy • Data Viz",
      description:
        "This project investigates the use of machine learning to predict depression severity based on self-reported mental health assessments. Developed a supervised learning pipeline to classify individuals into severity categories using logistic regression, random forest, and SVMs.",
      github: "https://github.com/aparker03/depression-risk-modeling",
      video: "",
      category: "data-science",
      image: "/minipic/depressionrisk_minipic.png",
      imageBackground: "#1a1a1a",
    },
    {
      name: "This Website",
      period: "2025",
      tags: "React • Tailwind • TypeScript",
      description:
        "A professional portfolio website built with React, TypeScript, and Tailwind CSS. Features an interactive timeline visualization, GitHub activity integration, responsive design with dark mode support, and smooth scroll animations.",
      github: "https://github.com/SlicVik",
      video: "",
      category: "website-dev",
      image: "/minipic/portfolio_minipic.png",
      imageBackground: "#2f251d",
    },
    {
      name: "VVE Code",
      period: "2025",
      tags: "React • Node.js • Docker • WebSocket",
      description:
        "Real-time collaborative Python code editor with live cursor tracking and instant execution in a secure Docker environment. Supports 50+ preloaded libraries and Matplotlib visualizations rendered directly in the browser.",
      github: "https://github.com/SlicVik/vve-code",
      video: "",
      category: "website-dev",
      image: "/minipic/vvecode_minipic.png",
      imageBackground: "#000000",
    },
    {
      name: "Fridge Door App",
      period: "Coming Soon",
      tags: "Mobile • React Native",
      description:
        "A social networking mobile app that lets you share quick life updates with friends and family, just like leaving a note on your fridge door. Post short updates, photos, and moments that matter to your inner circle.",
      github: "https://github.com/SlicVik/Fridge-Door-App",
      video: "",
      category: "mobile-app",
      image: "/minipic/fridgedoor_minipic.png",
      imageBackground: "#1a1a1a",
    },
  ];

  const filters: { label: string; value: Category }[] = [
    { label: "All", value: "all" },
    { label: "Data Science", value: "data-science" },
    { label: "Mobile App", value: "mobile-app" },
    { label: "Website Dev", value: "website-dev" },
  ];

  // Check if project matches filter
  const isProjectActive = (project: Project) => {
    return activeFilter === "all" || project.category === activeFilter;
  };

  // Autoplay video when modal opens
  useEffect(() => {
    if (selectedProject?.video && videoRef.current) {
      videoRef.current.play().catch((e) => console.log("Autoplay prevented:", e));
    }
  }, [selectedProject]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Hexagon dimensions
  const hexWidth = 160;
  const hexHeight = 180;
  const gap = 10;

  // For pointy-top hexagons in a honeycomb:
  // - Vertical spacing: 75% of height (hexagons overlap vertically in honeycomb)
  const verticalSpacing = hexHeight * 0.75 + gap;
  // - Horizontal offset for alternating rows: half hexagon width
  const horizontalOffset = (hexWidth + gap) / 2;

  // Layout matching reference: Row 0 (top) has 3, Row 1 has 3, offset pattern
  // Actually looking at reference: top row has 2, bottom row has 4
  // The key is that row 1 is OFFSET horizontally so hexagons fit in gaps
  const row0 = projects.slice(0, 3); // First 3 projects in top row
  const row1 = projects.slice(3, 6); // Next 3 projects in bottom row

  const HexagonButton = ({ project, style }: { project: Project; style?: React.CSSProperties }) => {
    const isActive = isProjectActive(project);
    const borderWidth = 2;
    return (
      <div
        className={`absolute group transition-all duration-300 ${isActive
          ? "hover:scale-105 hover:z-10"
          : "grayscale opacity-40 hover:opacity-60"
          }`}
        style={{
          width: `${hexWidth}px`,
          height: `${hexHeight}px`,
          ...style,
        }}
      >
        {/* Border hexagon - sits behind */}
        <div
          className="absolute hexagon bg-foreground/80"
          style={{
            top: `-${borderWidth}px`,
            left: `-${borderWidth}px`,
            width: `${hexWidth + borderWidth * 2}px`,
            height: `${hexHeight + borderWidth * 2}px`,
          }}
        />

        {/* Main clickable hexagon */}
        <button
          onClick={() => setSelectedProject(project)}
          className="absolute inset-0 hexagon overflow-hidden transition-all duration-300 focus:outline-none"
        >
          {/* Background for bottom half */}
          <div className="absolute inset-0 bg-card" />

          {/* Image area - top half only */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 50%, 0% 50%, 0% 25%)",
              backgroundColor: project.imageBackground || "#1a1a1a"
            }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-contain"
                style={{ objectPosition: "center 35%" }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <span className="text-3xl font-bold text-muted-foreground/30">
                  {project.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </span>
              </div>
            )}
          </div>

          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/40 to-primary/20 transition-opacity duration-300 ${isActive ? "opacity-0 group-hover:opacity-100" : "opacity-0"
              }`}
          />

          {/* Project Title - Bottom half, vertically centered */}
          <div className="absolute top-[50%] bottom-[25%] left-[10%] right-[10%] flex items-center justify-center z-10">
            <h4
              className={`text-xs md:text-sm font-bold leading-tight text-center transition-colors duration-300 ${isActive
                ? "text-foreground group-hover:text-foreground"
                : "text-muted-foreground"
                }`}
            >
              {project.name}
            </h4>
          </div>
        </button>
      </div>
    );
  };

  // Calculate container dimensions
  // Row 0: 3 hexagons, Row 1: 3 hexagons offset
  const row0Count = row0.length;
  const row1Count = row1.length;
  const row0Width = row0Count * hexWidth + (row0Count - 1) * gap;
  const row1Width = row1Count * hexWidth + (row1Count - 1) * gap;
  const containerWidth = Math.max(row0Width, row1Width) + horizontalOffset + 40;
  const containerHeight = verticalSpacing + hexHeight + 20;

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

        {/* Featured Projects Section */}
        <div className="relative">
          <h3 className="text-2xl font-light mb-4 text-center text-foreground">
            Projects
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Filter by category to explore my work.
          </p>

          {/* Filter Buttons - Single Island */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-card rounded-full p-1 border border-border shadow-sm">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter.value
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground hover:text-primary"
                    }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Honeycomb Grid Container */}
          <div
            className="relative mx-auto"
            style={{
              width: `${containerWidth}px`,
              height: `${containerHeight}px`,
            }}
          >
            {/* Row 0: 3 hexagons */}
            {row0.map((project, index) => {
              const x = index * (hexWidth + gap);
              return (
                <HexagonButton
                  key={project.name}
                  project={project}
                  style={{
                    left: `${x}px`,
                    top: "0px",
                  }}
                />
              );
            })}

            {/* Row 1: 3 hexagons, OFFSET horizontally by half a hexagon */}
            {row1.map((project, index) => {
              // Offset this row horizontally so hexagons nestle in the gaps
              const x = horizontalOffset + index * (hexWidth + gap);
              return (
                <HexagonButton
                  key={project.name}
                  project={project}
                  style={{
                    left: `${x}px`,
                    top: `${verticalSpacing}px`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video or Placeholder */}
            <div className="aspect-video bg-muted rounded-t-xl overflow-hidden">
              {selectedProject.video ? (
                <video
                  ref={videoRef}
                  src={selectedProject.video}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  controls
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted/50 to-card relative">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, currentColor 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <h3 className="text-2xl font-light text-primary mb-2 relative z-10">
                    {selectedProject.name === "This Website"
                      ? "Look Around!"
                      : "Demo Coming Soon"}
                  </h3>
                  <p className="text-sm text-muted-foreground relative z-10">
                    {selectedProject.name === "This Website"
                      ? "You're already experiencing it."
                      : "Source code available below"}
                  </p>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  {selectedProject.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {selectedProject.period} • {selectedProject.tags}
                </p>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-medium text-sm rounded-lg hover:bg-foreground/90 transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    View Code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted text-muted-foreground font-medium text-sm rounded-lg cursor-not-allowed">
                    <Code className="w-4 h-4" />
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
