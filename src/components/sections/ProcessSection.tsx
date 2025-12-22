import { Compass, PenTool, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Strategy & Architecture",
    description: "We analyze your business needs and design a comprehensive technical roadmap.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "System Design",
    description: "Creating detailed specifications and wireframes for your custom solution.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Development & Automation",
    description: "Building your system with clean code, integrations, and automated workflows.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Launch & Scale",
    description: "Deploying your solution and providing ongoing support for growth.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            From Concept to{" "}
            <span className="gradient-text">Launch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven methodology that delivers results on time, every time.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Card */}
                <div className="glass-card p-8 text-center h-full transition-all duration-500 hover:border-primary/30 hover:-translate-y-2">
                  {/* Step number with glow */}
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Step number badge */}
                  <div className="absolute top-4 right-4 text-4xl font-bold text-glass-border/50 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
