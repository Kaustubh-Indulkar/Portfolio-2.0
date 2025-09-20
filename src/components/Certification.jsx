import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { href } from "react-router-dom";

const certification = [
  {
    id: 1,
    title: "Data Analytics Job Simulation - Forage",
    image: "/projects/Certificate-1.png",
    demoUrl: "/projects/Certificate-1.png",
    
  },
  {
    id: 2,
    title: "Career Essentials in Data Analysis by Microsoft and LinkedIn - LinkedIn Learning",
    image: "/projects/Certificate-2.png",
    demoUrl: "/projects/Certificate-2.png",
    
  },
  {
    id: 3,
    title: "Introduction to	Data Science Job Simulation - Forage",
    image: "/projects/Certificate-3.png",
    demoUrl:"/projects/Certificate-3.png",
   
  },
  {
    id: 4,
    title: "Artificial Intelligence Primer Certification - Infosys Springboard",
    image: "/projects/Certificate-4.png",
    demoUrl: "/projects/Certificate-4.png",
    
  },
  {
    id: 5,
    title: "Intro to UI/UX design - le wagon",
    image: "/projects/Certificate-5.png",
    demoUrl: "/projects/Certificate-5.png",
    
  },
  {
    id: 6,
    title: "CPP Training - Spoken Tutorial Project, IIT Bombay",
    image: "/projects/Certificate-6.png",
    demoUrl:"/projects/Certificate-6.png",
   
  },
  
];

export const Certification = () => {
  return (
    <section id="certification" className="py-24 px-4 relative font-mono">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My <span className="text-primary"> Certifications </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my certifications, which reflect my continuous learning and commitment to professional growth. Each certification has strengthened my expertise, validated my skills, and equipped me with industry-relevant knowledge to build impactful solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certification.map((certificate, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden" >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-60">
                <h3 className="text-xl font-semibold mb-1"> {certificate.title}</h3><br/>
                <div className="flex justify-center items-center w-full">
                  <div className="flex space-x-3 gap-4 max-w-fit">
                    <a
                      href={certificate.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80  cosmic-button inline-flex items-center justify-center space-x-2 gap-2 "
                    > View Certificate
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};