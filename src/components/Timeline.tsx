import { useState } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import SectionTitle from "./SectionTitle";

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
      offsetLevel: 0,
      fullContent: {
        degree: "Bachelor's of Science in Computer Science and Engineering",
        school: "University of Toledo",
        location: "Toledo, OH",
        period: "Aug 2019 - Dec 2023",
        gpa: "3.26",
      },
    },
    {
      id: "exp0",
      year: 2022,
      month: 1,
      type: "experience",
      title: "IT Technician",
      icon: Briefcase,
      offsetLevel: 1,
      fullContent: {
        role: "IT Technician",
        company: "Emerson",
        location: "Sidney, OH",
        period: "Jan 2022 - May 2022",
        description: [
          "Delivered technical support to employees both onsite and remotely, resolving hardware and software issues to maintain business continuity.",
          "Installed and configured 100% of end-user equipment, including desktops, laptops, and essential software, ensuring consistent and secure deployments.",
          "Operated an on-site IT support lounge, providing real-time assistance and improving user satisfaction through effective face-to-face troubleshooting.",
          "Documented common issues and solutions, contributing to knowledge base development and reducing repeat support requests.",
        ],
      },
    },
    {
      id: "exp1a",
      year: 2022,
      month: 5,
      type: "experience",
      title: "IT Engineering Technician",
      icon: Briefcase,
      offsetLevel: 2,
      fullContent: {
        role: "IT Engineering Technician",
        company: "Emerson",
        location: "Sidney, OH",
        period: "May 2022 – Aug 2022",
        description: [
          "Led a data engineering project, meeting weekly deadlines and presenting insights to stakeholders.",
          "Provisioned and configured hardware/software for engineering teams, and resolved technical tickets, improving operational efficiency and user satisfaction.",
          "Developed and maintained automated installation scripts to streamline software deployment, reducing setup time.",
          "Deployed and configured the Elastic Stack to monitor and analyze application logs, reducing incident detection time by over 90%.",
        ],
      },
    },
    {
      id: "edu2",
      year: 2023,
      month: 12,
      type: "education",
      title: "Completed BS",
      icon: GraduationCap,
      offsetLevel: 3,
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
      offsetLevel: 0,
      fullContent: {
        degree: "Master's in Applied Data Science",
        school: "University of Michigan - Ann Arbor",
        location: "Ann Arbor, MI",
        period: "Aug 2024 - Aug 2025",
        gpa: "3.70",
      },
    },
    {
      id: "exp2a",
      year: 2025,
      month: 6,
      type: "experience",
      title: "Research Assistant",
      icon: Briefcase,
      offsetLevel: 1,
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
      offsetLevel: 2,
      fullContent: {
        degree: "Master's in Applied Data Science",
        school: "University of Michigan - Ann Arbor",
        location: "Ann Arbor, MI",
        period: "Aug 2024 - Aug 2025",
        gpa: "3.70",
      },
    },
    {
      id: "exp3",
      year: 2025,
      month: 10,
      type: "experience",
      title: "AI Developer",
      icon: Briefcase,
      offsetLevel: 5,
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

  const years = [2019, 2020, 2021, 2022, 2023, 2024, 2025];

  // Calculate position based on year and month
  const getPosition = (year: number, month: number) => {
    const startYear = 2019;
    const startMonth = 8; // August
    const totalMonths = (year - startYear) * 12 + (month - startMonth);
    const totalSpan = (2025 - 2019) * 12 + (12 - 8); // 2019 Aug to 2025 Dec
    return (totalMonths / totalSpan) * 100;
  };

  // Get year position
  const getYearPosition = (year: number) => {
    return getPosition(year, year === 2019 ? 8 : 1);
  };

  return (
    <section
      id="timeline"
      className="pt-10 pb-20 px-6 bg-card/30 animate-slide-up"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle className="mb-24 md:mb-32">Journey</SectionTitle>

        {/* MOBILE VIEW (Vertical Stack) */}
        <div className="block md:hidden relative pl-8 border-l border-border space-y-12">
          {events.map((event) => {
            const Icon = event.icon;
            const isEducation = event.type === "education";
            return (
              <div key={event.id} className="relative">
                {/* Dot on the line */}
                <div
                  className={`absolute -left-[39px] top-0 w-5 h-5 rounded-full border-4 border-background ${
                    isEducation ? "bg-primary" : "bg-accent"
                  }`}
                />

                <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon
                      className={`w-5 h-5 ${
                        isEducation ? "text-primary" : "text-accent"
                      }`}
                    />
                    <span className="text-xs font-medium text-muted-foreground border border-border px-2 py-0.5 rounded-full">
                      {event.fullContent.period}
                    </span>
                  </div>

                  {"role" in event.fullContent ? (
                    <>
                      <h4 className="font-normal text-xl text-foreground mb-1">
                        {event.fullContent.role}
                      </h4>
                      <p className="text-sm font-medium text-primary mb-2">
                        {event.fullContent.company}
                      </p>
                      <ul className="space-y-2 mt-4">
                        {event.fullContent.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm font-light text-muted-foreground flex gap-2"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <h4 className="font-normal text-xl text-foreground mb-1">
                        {event.fullContent.degree}
                      </h4>
                      <p className="text-sm font-medium text-primary mb-2">
                        {event.fullContent.school}
                      </p>
                      <p className="text-sm font-light text-accent mt-2">
                        GPA: {event.fullContent.gpa}
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP VIEW (Horizontal Timeline) */}
        <div className="hidden md:block relative py-32 px-4">
          {/* Single continuous timeline line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-border -translate-y-1/2"></div>

          {/* Year markers on the line */}
          {years.map((year) => (
            <div
              key={year}
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                left: `${getYearPosition(year)}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-3 h-3 rounded-full bg-muted-foreground/40"></div>
              <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs font-light text-muted-foreground whitespace-nowrap">
                {year}
              </span>
            </div>
          ))}

          {/* Events on the same line */}
          {events.map((event, index) => {
            const Icon = event.icon;
            const position = getPosition(event.year, event.month);
            const isHovered = hoveredId === event.id;
            const isEducation = event.type === "education";

            // Alternate between top and bottom, with different offset levels to prevent overlap
            const isAbove = event.offsetLevel % 2 === 0;
            const verticalOffset = 60 + Math.floor(event.offsetLevel / 2) * 40; // 60, 100, 140, etc.

            // Edge detection logic for tooltip positioning
            const isFirst = index === 0;
            const isLast = index === events.length - 1;

            return (
              <div
                key={event.id}
                // Updated className to dynamically apply z-50 to the hovered item wrapper
                className={`absolute top-1/2 -translate-y-1/2 ${
                  isHovered ? "z-50" : "z-10"
                }`}
                style={{
                  left: `${position}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setHoveredId(event.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Event marker on the main line */}
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all cursor-pointer ${
                    isEducation
                      ? "bg-primary border-primary hover:scale-125"
                      : "bg-accent border-accent hover:scale-125"
                  }`}
                ></div>

                {/* Connector line going up or down */}
                <div
                  className={`absolute left-1/2 w-0.5 -translate-x-1/2 ${
                    isEducation ? "bg-primary/40" : "bg-accent/40"
                  }`}
                  style={{
                    height: `${verticalOffset}px`,
                    [isAbove ? "bottom" : "top"]: "100%",
                  }}
                ></div>

                {/* Event card container (Dot/Icon) */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 ${
                    isAbove ? "bottom-full" : "top-full"
                  }`}
                  style={{
                    [isAbove
                      ? "marginBottom"
                      : "marginTop"]: `${verticalOffset}px`,
                  }}
                >
                  <div
                    className={`p-3 rounded-lg border transition-all cursor-pointer ${
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
                  </div>

                  {/* Simple title */}
                  <p
                    className={`absolute ${
                      isAbove ? "bottom-full mb-1" : "top-full mt-1"
                    } left-1/2 -translate-x-1/2 text-xs font-light text-muted-foreground whitespace-nowrap`}
                  >
                    {event.title}
                  </p>

                  {/* Hover card with full details */}
                  {isHovered && (
                    <div
                      className={`absolute ${
                        isAbove ? "bottom-full mb-2" : "top-full mt-2"
                      } w-96 p-4 bg-card border border-border rounded-lg shadow-xl animate-fade-in 
                      ${
                        isFirst
                          ? "left-0"
                          : isLast
                          ? "right-0"
                          : "left-1/2 -translate-x-1/2"
                      }
                      `}
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
                            {event.fullContent.location} |{" "}
                            {event.fullContent.period}
                          </p>
                          <ul className="space-y-2">
                            {event.fullContent.description.map((item, i) => (
                              <li
                                key={i}
                                className="text-xs font-light text-muted-foreground flex gap-2 text-left"
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
                            {event.fullContent.location} |{" "}
                            {event.fullContent.period}
                          </p>
                          <p className="text-xs font-light text-accent">
                            GPA: {event.fullContent.gpa}
                          </p>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
