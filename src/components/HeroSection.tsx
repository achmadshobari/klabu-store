import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-warm/50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/60 rounded-full blur-3xl opacity-40" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Tagline */}
          <p 
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Curated Stories for Thoughtful Readers
          </p>

          {/* Main Headline */}
          <h1 
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Where Stories
            <br />
            <span className="italic font-normal">Find Their Home</span>
          </h1>

          {/* Sub-headline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Discover a thoughtfully curated collection of e-books, 
            where every page invites you into worlds of wonder and wisdom.
          </p>

          {/* CTA Button */}
          <div 
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              onClick={scrollToGallery}
              variant="serene"
              size="lg"
              className="group"
            >
              Explore Collection
              <ChevronDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-muted-foreground/40 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
