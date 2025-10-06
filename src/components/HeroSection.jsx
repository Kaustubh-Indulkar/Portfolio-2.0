import { ArrowDown, Briefcase } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 text-center font-mono"
    >
      <div className="container max-w-3xl mx-auto z-10">
        <div className="space-y-6">
          {/* Responsive Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight flex flex-wrap justify-center gap-x-6 gap-y-1 break-words">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Kaustubh
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              Indulkar
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          {/* Button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="https://github.com/Kaustubh-Indulkar"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button inline-flex items-center justify-center gap-2"
            >
              <Briefcase size={18} className="shrink-0" />
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
