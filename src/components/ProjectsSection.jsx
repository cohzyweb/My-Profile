import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    id: "1",
    title: "Landing Page",
    description: "A polished landing page built with Framer, HTML and CSS.",
    image: "/Projects/Project 1.png",
    tags: ["HTML/CSS", "JavaScript", "Framer"],
    demoUrl: "http://ololadeadesuyi.com/",
    githubUrl: "https://github.com/cohzyweb/Lolade",
  },
  {
    id: "2",
    title: "Airline Website",
    description:
      "A commercial airline web app built with TailwindCSS, JavaScript, HTML and CSS.",
    image: "/Projects/Project 2.png",
    tags: ["HTML/CSS", "JavaScript", "TailwindCSS"],
    demoUrl: "https://aerohubnigeria.netlify.app/",
    githubUrl: "https://github.com/cohzyweb/aerohub_nigeria",
  },
  {
    id: "3",
    title: "Furniture Website",
    description:
      "A commercial furniture store web app built with HTML, CSS, and JavaScript.",
    image: "/Projects/Project 3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://thecremroomfurniture.netlify.app/",
    githubUrl: "https://github.com/cohzyweb/TCR",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured"
          accent="Projects"
          description="Recent projects, thoughtfully designed and meticulously crafted with a strong focus on performance, usability, and engaging user experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group glass rounded-2xl overflow-hidden card-hover"
              style={{
                animation: `reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms both`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Hover links */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} demo`}
                    className="glass-strong p-3 rounded-full text-foreground hover:text-primary hover:border-primary/40 transition-colors backdrop-blur-md"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source`}
                    className="glass-strong p-3 rounded-full text-foreground hover:text-primary hover:border-primary/40 transition-colors backdrop-blur-md"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-full border border-primary/20 bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://github.com/cohzyweb"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
