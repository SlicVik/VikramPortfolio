import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vikra@umich.edu",
      href: "mailto:vikra@umich.edu",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "989-488-4325",
      href: "tel:989-488-4325",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "vikram-vaddamani",
      href: "https://www.linkedin.com/in/vikram-vaddamani-b430a81b8/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "SlicVik",
      href: "https://github.com/SlicVik",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
        <p className="text-xl text-muted-foreground mb-12">
          Let's connect and discuss opportunities
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.label === "LinkedIn" || contact.label === "GitHub" ? "_blank" : undefined}
              rel={contact.label === "LinkedIn" || contact.label === "GitHub" ? "noopener noreferrer" : undefined}
              className="p-6 bg-card border border-border rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {contact.label}
                  </p>
                  <p className="font-medium text-foreground">{contact.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Vikram Vaddamani. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
