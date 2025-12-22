const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "Backend" },
  { name: "Make", category: "Automation" },
  { name: "n8n", category: "Automation" },
  { name: "OpenAI", category: "AI" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind", category: "Styling" },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Technology Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powered by{" "}
            <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We use industry-leading technologies to build robust, scalable, and future-proof solutions.
          </p>
        </div>

        {/* Tech badges - animated marquee effect */}
        <div className="relative">
          {/* Gradient fades on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* First row */}
          <div className="flex gap-4 mb-4 overflow-hidden">
            <div className="flex gap-4 animate-[shimmer_20s_linear_infinite]">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 glass-card px-6 py-4 flex items-center gap-3 hover:border-primary/30 transition-all duration-300 group cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover:scale-150 transition-transform" />
                  <span className="font-medium whitespace-nowrap">{tech.name}</span>
                  <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-glass">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - reverse direction */}
          <div className="flex gap-4 overflow-hidden">
            <div className="flex gap-4 animate-[shimmer_25s_linear_infinite_reverse]">
              {[...technologies.slice(5), ...technologies.slice(0, 5), ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 glass-card px-6 py-4 flex items-center gap-3 hover:border-primary/30 transition-all duration-300 group cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary group-hover:scale-150 transition-transform" />
                  <span className="font-medium whitespace-nowrap">{tech.name}</span>
                  <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-glass">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
