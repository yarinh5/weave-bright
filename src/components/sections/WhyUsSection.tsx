import { Zap, Fingerprint, Scale, Cog, Building2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Launch faster with our agile development process and proven workflows.",
  },
  {
    icon: Fingerprint,
    title: "Fully Custom",
    description: "No templates. Every system is built from scratch for your unique needs.",
  },
  {
    icon: Scale,
    title: "Scalable Architecture",
    description: "Built to grow with your business, handling increased load seamlessly.",
  },
  {
    icon: Cog,
    title: "Automation-First",
    description: "We eliminate manual tasks by automating everything that can be automated.",
  },
  {
    icon: Building2,
    title: "Built for Business",
    description: "Enterprise-grade solutions designed for real-world business challenges.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="relative py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              We Don't Just Build.{" "}
              <span className="gradient-text">We Automate.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our automation-first approach means your systems work smarter, not harder. We combine cutting-edge technology with strategic thinking to deliver solutions that truly transform businesses.
            </p>

            {/* Stats row */}
            <div className="flex gap-8">
              <div>
                <div className="text-4xl font-bold gradient-text">3x</div>
                <div className="text-sm text-muted-foreground">Faster Development</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">80%</div>
                <div className="text-sm text-muted-foreground">Less Manual Work</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">∞</div>
                <div className="text-sm text-muted-foreground">Scale Potential</div>
              </div>
            </div>
          </div>

          {/* Right features grid */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex gap-4 p-5 rounded-xl bg-glass/30 border border-transparent hover:border-glass-border transition-all duration-300 hover:bg-glass/50"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
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

export default WhyUsSection;
