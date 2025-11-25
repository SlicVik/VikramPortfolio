const Technologies = () => {
  const techCategories = [
    {
      title: "Languages",
      items: ["Python", "C#", "Javascript", "C/C++", "SQL", "NoSQL", "HTML/CSS"],
    },
    {
      title: "Tools & Frameworks",
      items: [
        "MongoDB",
        "Google Cloud Platform",
        "Prisma",
        "Auth0",
        "Git",
        "React",
        "Node.js",
        "Flask",
        "Playwright",
        "Gen AI APIs",
      ],
    },
    {
      title: "Libraries",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Altair",
        "TensorFlow",
        "OAuth",
        "Scikit-learn",
      ],
    },
    {
      title: "Relevant Coursework",
      items: [
        "Data Manipulation",
        "Big Data",
        "Efficient Data Processing",
        "Deep Learning",
        "Machine Learning Pipelines",
        "Network Analysis",
        "Applied Natural Language Processing",
        "SQL and Databases",
      ],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-foreground">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
