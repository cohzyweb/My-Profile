import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "Landing Page",
    description: "An awesome landing page app using Framer, HTML and CSS",
    image: "/Projects/Project 1.png",
    tags: ["HTML/CSS", "JavaScript", "Framer"],
    demoUrl: "http://ololadeadesuyi.com/",
    githubUrl: "https://github.com/cohzyweb/Lolade",
  },
  {
    id: "2",
    title: "Airline Website",
    description:
      "An awesome commercial web app using TailwindCSS, JavaScript, HTML and CSS",
    image: "/Projects/Project 2.png",
    tags: ["HTML/CSS", "JavaScript", "TailwindCSS"],
    demoUrl: "https://aerohubnigeria.netlify.app/",
    githubUrl: "https://github.com/cohzyweb/aerohub_nigeria",
  },
  {
    id: "3",
    title: "Furniture Website",
    description: "An awesome commercial web app using HTML, CSS, and JavaScript",
    image: "/Projects/Project 3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://thecremroomfurniture.netlify.app/",
    githubUrl: "https://github.com/cohzyweb/TCR",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, each thoughtfully designed and
          meticulously crafted. I paid close attention to every detail, with a
          strong focus on performance, usability, and creating a seamless,
          engaging user experience throughout.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-center">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-center gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/cohzyweb"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
