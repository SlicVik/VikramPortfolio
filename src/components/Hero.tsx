import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SlicVik",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vikram-vaddamani-b430a81b8/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:vikra@umich.edu",
      label: "Email",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen p-0 bg-background flex flex-col md:flex-row overflow-hidden relative"
    >
      {/* Positioned absolutely relative to the viewport/section to ensure it's always top-left.
        z-20 ensures it stays above the background layers.
        text-background ensures it is visible on the dark left panel.
      */}
      <div className="absolute top-6 left-8 md:top-12 md:left-16 lg:left-20 z-20 text-xs md:text-sm font-mono tracking-widest opacity-60 uppercase text-background">
        Tech Portfolio
      </div>

      {/* Left Side: Identity (Dark Background) */}
      <div className="flex-1 bg-foreground text-background flex flex-col justify-center p-8 md:p-16 lg:p-20 relative">
        {/* Light Dots Background Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10">
          {/* Full Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide leading-[0.9] mb-8 mt-12 md:mt-0 uppercase">
            VIKRAM
            <br />
            VADDAMANI
          </h1>

          {/* Existing Description */}
          <p className="text-lg md:text-xl font-light text-background/80 max-w-lg leading-relaxed border-l-2 border-primary/50 pl-6">
            BS in Computer Science and MS in Data Science. Backend Engineer
            utilizing Python, C# and Javascript. Specialized in implementing LLM
            and machine learning model solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 pl-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-primary transition-colors transform hover:scale-110 duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Navigation (Light Background) */}
      <div className="flex-1 bg-background flex flex-col justify-center p-8 md:p-16 lg:p-20 relative">
        {/* Dark Dots Background Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--foreground) / 0.5) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <nav className="flex flex-col gap-6 md:gap-10 items-start relative z-10">
          <button
            onClick={() => scrollToSection("projects")}
            className="group flex items-baseline gap-4 md:gap-6 text-3xl md:text-5xl font-light text-foreground hover:text-primary transition-colors text-left tracking-tight"
          >
            <span className="text-sm md:text-base font-mono text-primary/50 group-hover:text-primary transition-colors -translate-y-2 md:-translate-y-3">
              01
            </span>
            Projects
          </button>

          <button
            onClick={() => scrollToSection("timeline")}
            className="group flex items-baseline gap-4 md:gap-6 text-3xl md:text-5xl font-light text-foreground hover:text-primary transition-colors text-left tracking-tight"
          >
            <span className="text-sm md:text-base font-mono text-primary/50 group-hover:text-primary transition-colors -translate-y-2 md:-translate-y-3">
              02
            </span>
            Journey
          </button>

          <button
            onClick={() => scrollToSection("technologies")}
            className="group flex items-baseline gap-4 md:gap-6 text-3xl md:text-5xl font-light text-foreground hover:text-primary transition-colors text-left tracking-tight"
          >
            <span className="text-sm md:text-base font-mono text-primary/50 group-hover:text-primary transition-colors -translate-y-2 md:-translate-y-3">
              03
            </span>
            Skills
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group flex items-baseline gap-4 md:gap-6 text-3xl md:text-5xl font-light text-primary hover:text-foreground transition-colors text-left tracking-tight"
          >
            <span className="text-sm md:text-base font-mono text-primary/50 group-hover:text-primary transition-colors -translate-y-2 md:-translate-y-3">
              04
            </span>
            Contact Me
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
