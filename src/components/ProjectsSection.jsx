import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Content Generator ",
    description: "Developed a full-stack AI content generation application using Next.js, React, Tailwind CSS, and TypeScript, integrating Gemini with Clerk authentication to generate high-quality content based on user prompts.",
    image: "/projects/Project 4.png",
    tags: ["React", "TailwindCSS", "Next.js","Clerk","Gemini API"],
    demoUrl: "https://ai-content-generator-lemon.vercel.app/",
    githubUrl: "https://github.com/Kaustubh-Indulkar/AI-Content-Generator",
  },
  {
    id: 2,
    title: "NewsMonkey",
    description:
      "This NewsApp is a React application for browsing news . It fetches news data from API (News API) and displays it in a categorized and searchable format. The app features responsive design for optimal viewing on all devices.",
    image: "/projects/Project 5.png",
    tags: ["JavaScript", "React", "NewsAPI","Tailwind CSS"],
    demoUrl: "https://github.com/Kaustubh-Indulkar/NewsMonkey-React",
    githubUrl: "https://github.com/Kaustubh-Indulkar/NewsMonkey-React",
  },
  {
    id: 3,
    title: "NexChat - Real Time Chat Application",
    description:
      "Real-time chat app using MERN stack and Socket.IO. Supports live messaging and stores chat data in MongoDB.",
    image: "/projects/Project 6.png",
    tags: ["React","Axios","Socket.IO Client","Node.js","Express.js","MongoDB"],
    demoUrl: "https://github.com/Kaustubh-Indulkar/NexChat-Real-Time-Chat-App",
    githubUrl: "https://github.com/Kaustubh-Indulkar/NexChat-Real-Time-Chat-App",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative font-mono">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden" >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Kaustubh-Indulkar"
          >
            <Github size={18} className="shrink-0 " />
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};