import { useState } from "react";

const Hero = () => {
  const [bio, setBio] = useState(
    "BS in Computer Science and MS in Data Science. Backend Engineer that utilizes Python, C# and Javascript mainly. Excel at implementing LLM and machine learning model solutions in Python."
  );
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 animate-fade-in pt-20">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl md:text-7xl font-light mb-6 text-foreground">
          Vikram Vaddamani
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-3 mb-8 text-lg text-muted-foreground">
          <span>Software Engineer</span>
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span>Data Scientist</span>
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span>IT Technician</span>
        </div>
        {isEditing ? (
          <div className="space-y-4">
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-4 bg-card border border-border rounded-lg text-foreground min-h-[120px]"
            />
            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="relative group">
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {bio}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="absolute -top-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 text-sm bg-accent text-accent-foreground rounded"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
