import { ExternalLink } from "lucide-react";

const certification = [
  {
    id: 1,
    title: "Data Analytics Job Simulation - Forage",
    image: "/projects/Certificate-1.png",
    demoUrl: "/projects/Certificate-1.png",
  },
  {
    id: 2,
    title:
      "Career Essentials in Data Analysis by Microsoft and LinkedIn - LinkedIn Learning",
    image: "/projects/Certificate-2.png",
    demoUrl: "/projects/Certificate-2.png",
  },
  {
    id: 3,
    title: "Introduction to Data Science Job Simulation - Forage",
    image: "/projects/Certificate-3.png",
    demoUrl: "/projects/Certificate-3.png",
  },
  {
    id: 4,
    title: "Artificial Intelligence Primer Certification - Infosys Springboard",
    image: "/projects/Certificate-4.png",
    demoUrl: "/projects/Certificate-4.png",
  },
  {
    id: 5,
    title: "Intro to UI/UX Design - Le Wagon",
    image: "/projects/Certificate-5.png",
    demoUrl: "/projects/Certificate-5.png",
  },
  {
    id: 6,
    title: "C++ Training - Spoken Tutorial Project, IIT Bombay",
    image: "/projects/Certificate-6.png",
    demoUrl: "/projects/Certificate-6.png",
  },
];

export const Certification = () => {
  return (
    <section id="certification" className="py-24 px-4 relative font-mono">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my certifications, which reflect my continuous learning
          and commitment to professional growth. Each certification has strengthened
          my expertise, validated my skills, and equipped me with industry-relevant
          knowledge to build impactful solutions.
        </p>

        {/* Certification Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certification.map((certificate) => (
            <div
              key={certificate.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Certificate Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-lg font-semibold mb-4 leading-snug text-center">
                  {certificate.title}
                </h3>

                <div className="flex justify-center mt-auto">
                  <a
                    href={certificate.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 bg-primary/10 hover:bg-primary/20 text-sm sm:text-base font-medium px-4 py-2 sm:px-6 sm:py-2.5 rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200 ease-in-out"
                    style={{
                      width: "fit-content",
                      maxWidth: "90%",
                    }}
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
