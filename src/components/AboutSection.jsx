import { Briefcase, Building, Building2, Code, File, Linkedin, School, University, User ,  } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative font-mono">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer
            </h3>

            <p className="text-muted-foreground">
              I craft digital experiences that are responsive, accessible, and lightning-fast. Passionate about blending clean code with modern design, I specialize in building scalable, user-focused web applications powered by the latest technologies. My goal? Turning ideas into impactful solutions that don’t just work...but delight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="https://www.linkedin.com/in/kaustubh-indulkar-5aa334288/" 
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button inline-flex items-center justify-center space-x-2 gap-2">
                <Linkedin size={18} className="shrink-0 " />
          
                LinkedIn
              </a>

              <a
                href="/projects/Resume-Kaustubh Indulkar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 inline-flex items-center justify-center space-x-2 gap-2"
              >
                <File size={18} className="shrink-0 " />
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <University className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">  Bachelor of Engineering (Information Technology)</h4>
                  <p className="text-muted-foreground">2021-2025 </p>
                  <p className="text-muted-foreground">
                    PES Modern College of Engineering, Pune
                  </p>
                  <p className="text-muted-foreground">CGPA: 7.55</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">12th HSC (Higher Secondary Certificate)</h4>
                  <p className="text-muted-foreground">
                    2019-2021
                  </p>
                  <p className="text-muted-foreground">
                    Cambridge Junior College, Pune 
                  </p>
                  <p className="text-muted-foreground">
                    Percentage- 76.67%
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <School className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">10th SSC (Secondary School Certificate)</h4>
                  <p className="text-muted-foreground">
                    2019
                  </p>
                  <p className="text-muted-foreground">
                    Priyadarshani High School, Pune 
                  </p>
                  <p className="text-muted-foreground">
                    Percentage- 78.8%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};