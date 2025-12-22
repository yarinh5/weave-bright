import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="container relative px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
            
            {/* Floating sparkle */}
            <div className="absolute top-8 right-8 text-primary animate-pulse">
              <Sparkles className="w-8 h-8" />
            </div>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Let's Build Something Amazing
            </span>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to{" "}
              <span className="gradient-text">Automate</span>
              <br />
              Your Business?
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Book a free strategy call and discover how we can transform your operations with custom automation systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Start Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Schedule a Call
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-glass-border">
              <p className="text-sm text-muted-foreground">
                No commitment required • Free consultation • Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
