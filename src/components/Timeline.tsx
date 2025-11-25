import { useState } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const Timeline = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const events = [
    {
      id: "edu1",
      year: 2019,
      month: 8,
      type: "education",
      title: "Started BS in CS",
      icon: GraduationCap,
      fullContent: {
        degree: "Bachelor's of Science in Computer Science and Engineering",
        school: "University of Toledo",
        location: "Toledo, OH",
        period: "Aug 2019 - Dec 2023",
        gpa: "3.26",
      },
    },
    {
      id: "edu2",
      year: 2023,
      month: 12,
      type: "education",
      title: "Completed BS",
      icon: GraduationCap,
      fullContent: {
        degree: "Bachelor's of Science in Computer Science and Engineering",
        school: "University of Toledo",
        location: "Toledo, OH",
        period: "Aug 2019 - Dec 2023",
        gpa: "3.26",
      },
    },
    {
      id: "edu3",
      year: 2024,
      month: 8,
      type: "education",
      title: "Started MS",
      icon: GraduationCap,
      fullContent: {
        degree: "Master's in Applied Data Science",
        school: "University of Michigan - Ann Arbor",
        location: "Ann Arbor, MI",
        period: "Aug 2024 - Aug 2025",
        gpa: "3.70",
      },
    },
    {
      id: "exp1",
      year: 2025,
      month: 6,
      type: "experience",
      title: "Research Assistant",
      icon: Briefcase,
      fullContent: {
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
    },
    {
      id: "edu4",
      year: 2025,
      month: 8,
      type: "education",
      title: "MS Graduation",
      icon: GraduationCap,
      fullContent: {
        degree: "Master's in Applied Data Science",
        school: "University of Michigan - Ann Arbor",
        location: "Ann Arbor, MI",
        period: "Aug 2024 - Aug 2025",
        gpa: "3.70",
      },
    },
    {
      id: "exp2",
      year: 2025,
      month: 10,
      type: "experience",
      title: "AI Developer",
      icon: Briefcase,
      fullContent: {
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
    },
  ];

  // Calculate position based on year and month
  const getPosition = (year: number, month: number) => {
    const startYear = 2019;
    const startMonth = 8; // August
    const totalMonths = (year - startYear) * 12 + (month - startMonth);
    const totalSpan = (2025 - 2019) * 12 + (12 - 8); // 2019 Aug to 2025 Dec
    return (totalMonths / totalSpan) * 100;
  };

  return (
    <section id="timeline" className="py-20 px-6 bg-card/30 animate-slide-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light mb-16 text-center text-foreground">
          Journey
        </h2>

        <div className="relative py-12">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-border"></div>

          {/* Year markers */}
          <div className="relative flex justify-between mb-20">
            {[2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
              <div key={year} className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary mb-2"></div>
                <span className="text-sm font-light text-muted-foreground">{year}</span>
              </div>
            ))}
          </div>

          {/* Events */}
          <div className="relative h-64">
            {events.map((event) => {
              const Icon = event.icon;
              const position = getPosition(event.year, event.month);
              const isHovered = hoveredId === event.id;
              const isEducation = event.type === "education";

              return (
                <div
                  key={event.id}
                  className={`absolute ${
                    isEducation ? "bottom-1/2 mb-8" : "top-1/2 mt-8"
                  }`}
                  style={{ left: `${position}%`, transform: "translateX(-50%)" }}
                  onMouseEnter={() => setHoveredId(event.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Connector line */}
                  <div
                    className={`absolute ${
                      isEducation ? "bottom-0 top-auto" : "top-0 bottom-auto"
                    } left-1/2 w-0.5 h-8 bg-${
                      isEducation ? "primary" : "accent"
                    } -translate-x-1/2`}
                  ></div>

                  {/* Event marker */}
                  <div
                    className={`relative p-3 rounded-lg border transition-all cursor-pointer ${
                      isEducation
                        ? "bg-primary/10 border-primary hover:shadow-lg hover:shadow-primary/20"
                        : "bg-accent/10 border-accent hover:shadow-lg hover:shadow-accent/20"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isEducation ? "text-primary" : "text-accent"
                      }`}
                    />

                    {/* Hover card */}
                    {isHovered && (
                      <div
                        className={`absolute ${
                          isEducation ? "top-full mt-2" : "bottom-full mb-2"
                        } left-1/2 -translate-x-1/2 w-80 p-4 bg-card border border-border rounded-lg shadow-xl z-10 animate-fade-in`}
                      >
                        {"role" in event.fullContent ? (
                          <>
                            <h4 className="font-normal text-foreground mb-1">
                              {event.fullContent.role}
                            </h4>
                            <p className="text-sm font-light text-primary mb-1">
                              {event.fullContent.company}
                            </p>
                            <p className="text-xs font-light text-muted-foreground mb-3">
                              {event.fullContent.location} | {event.fullContent.period}
                            </p>
                            <ul className="space-y-2">
                              {event.fullContent.description.map((item, i) => (
                                <li
                                  key={i}
                                  className="text-xs font-light text-muted-foreground flex gap-2"
                                >
                                  <span className="text-primary">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <>
                            <h4 className="font-normal text-foreground mb-1">
                              {event.fullContent.degree}
                            </h4>
                            <p className="text-sm font-light text-primary mb-1">
                              {event.fullContent.school}
                            </p>
                            <p className="text-xs font-light text-muted-foreground mb-2">
                              {event.fullContent.location} | {event.fullContent.period}
                            </p>
                            <p className="text-xs font-light text-accent">
                              GPA: {event.fullContent.gpa}
                            </p>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Simple title below marker */}
                  <p
                    className={`absolute ${
                      isEducation ? "bottom-full mb-1" : "top-full mt-1"
                    } left-1/2 -translate-x-1/2 text-xs font-light text-muted-foreground whitespace-nowrap`}
                  >
                    {event.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
