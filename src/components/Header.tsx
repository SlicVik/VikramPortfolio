import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  // Scroll listener to toggle header visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show header only after scrolling down 80% of the viewport height
      const show = window.scrollY > window.innerHeight * 0.8;
      setIsVisible(show);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-normal text-foreground hover:text-primary transition-colors"
          >
            VV
          </button>
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection("technologies")}
              className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-light text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Sun className="w-4 h-4 text-muted-foreground" />
          <Switch checked={isDark} onCheckedChange={setIsDark} />
          <Moon className="w-4 h-4 text-muted-foreground" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
