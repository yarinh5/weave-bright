import { Globe, Workflow, Code2, Bot, Users } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Automated Websites",
    description: "High-performance websites with built-in automation and analytics",
  },
  {
    icon: Workflow,
    title: "Business Automations",
    description: "Streamline operations with Make, n8n, and custom API integrations",
  },
  {
    icon: Code2,
    title: "Custom SaaS Platforms",
    description: "Scalable software solutions tailored to your unique business needs",
  },
  {
    icon: Bot,
    title: "AI Agents & Workflows",
    description: "Intelligent automation powered by cutting-edge AI technology",
  },
  {
    icon: Users,
    title: "CRM & Lead Management",
    description: "Comprehensive systems to capture, nurture, and convert leads",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            What We Build
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            End-to-End{" "}
            <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From automated websites to AI-powered systems, we build everything your business needs to thrive in the digital age.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glass-card p-8 glow-effect transition-all duration-500 hover:border-primary/30 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon container */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover arrow indicator */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <span className="text-primary text-2xl">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
