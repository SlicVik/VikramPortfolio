import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Timeline />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
