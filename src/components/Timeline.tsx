import { Briefcase, GraduationCap } from "lucide-react";

const Timeline = () => {
  const education = [
    {
      degree: "Master's in Applied Data Science",
      school: "University of Michigan - Ann Arbor",
      location: "Ann Arbor, MI",
      period: "Aug 2024 - Aug 2025",
      gpa: "3.70",
    },
    {
      degree: "Bachelor's of Science in Computer Science and Engineering",
      school: "University of Toledo",
      location: "Toledo, OH",
      period: "Aug 2019 - Dec 2023",
      gpa: "3.26",
    },
  ];

  const experience = [
    {
      role: "AI Developer",
      company: "Integrated Informatics",
      location: "Atlanta, GA",
      period: "October 2025 – Present",
      description: [
        "Developed Python applications and C# Web APIs to streamline workflows and enhance user experience for healthcare users.",
        "Built an automated web scraper and form filler using Playwright (Python) to reduce manual input and improve data accuracy.",
        "Utilized LLM APIs to enhance the automated web scraper and a patient eligibility determination program, improving accuracy and user interaction.",
        "Collaborated with cross-functional teams to optimize clinic software performance and deliver scalable AI-driven solutions.",
      ],
    },
    {
      role: "Research Assistant",
      company: "University of Michigan",
      location: "Ann Arbor, MI",
      period: "June 2025 - August 2025",
      description: [
        "Conducted exploratory research on large language models, Retrieval-Augmented Generation (RAG), and natural language processing to enhance narrative generation by weighting story characteristics for dynamic storytelling.",
        "Prototyped RAG-based storytelling systems that incorporated custom weighting strategies based on narrative elements, enabling the creation of context-aware, restructured stories.",
        "Integrated multiple OAuth authentication providers into an existing web application, upgrading legacy authentication flows and modernizing backend dependencies.",
        "Managed a NoSQL MongoDB instance, performing data manipulation and access control to fulfill evolving user feature requests and maintain schema integrity.",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-foreground">
          Journey
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-primary font-medium mb-1">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.location} | {edu.period}
                  </p>
                  <p className="text-sm text-accent">GPA: {edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-semibold text-foreground mb-1">{exp.role}</h4>
                  <p className="text-accent font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {exp.location} | {exp.period}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
