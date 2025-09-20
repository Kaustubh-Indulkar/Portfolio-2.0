import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { href } from "react-router-dom";

const internships = [
  {
    id: 1,
    title: "Data Analytics Process Automation Intern",
    description: "Acquired hands-on experience in data preparation, cleansing, and workflow automation using Alteryx, gaining insights into business analytics and earning a certificate jointly issued by Alteryx, EduSkills, and AICTE.",
    image: "/projects/Internship 1.png",
    tags: ["January 2025 - March 2025 ","Alteryx SparkED"],
    demoUrl: "/projects/Internship 1.png",
    
  },
  {
    id: 2,
    title: "AI & Cloud Intern",
    description:
      "Built a content-based Movie Recommendation System using IBM Cloud and SkillsBuild resources, applying metadata-driven techniques to deliver personalized movie suggestions.",
    image: "/projects/Certificate.png",
    tags: ["December 2023 - January 2024 ","Edunet Foundation "],
    demoUrl: "/projects/Certificate.png",
    
  },
  {
    id: 3,
    title: "AWS AI-ML Virtual Internship Program",
    description:
      "Gained hands-on experience in Artificial Intelligence and Machine Learning, leveraging AWS resources to enhance practical skills and contribute to project success.",
    image: "/projects/AWS Internship.jpeg",
    tags: [" September 2023 - November 2023 ","EduSkills "],
    demoUrl:"/projects/AWS Internship.jpeg",
   
  },
  
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative font-mono">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My <span className="text-primary"> Internships </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent internships, where I gained hands-on experience and contributed to impactful solutions. Each role helped me sharpen my skills, adapt to real-world challenges, and deliver value with a focus on performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden" >
                <img
                  src={internship.image}
                  alt={internship.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {internship.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {internship.title}</h3><br/>
                <p className="text-muted-foreground text-sm mb-4">
                  {internship.description}
                </p>
                <div className="flex justify-center items-center w-full">
                  <div className="flex space-x-3 gap-4 max-w-fit">
                    <a
                      href={internship.demoUrl}
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