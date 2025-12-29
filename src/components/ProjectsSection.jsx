const projects = [
  {
    id: "1",
    title: "Landing Page",
    description: "An awesome landing page app using Framer, HTML and CSS",
    image: "/Projects/Project 1.png",
    tags: "HTML/CSS, JavaScript, Framer",
    demoUrl: "http://ololadeadesuyi.com/",
    githubUrl: "https://github.com/cohzyweb/Lolade",
  },
  {
    id: "2",
    title: "Airline Website",
    description:
      "An awesome commercial web app using TailwindCSS, JavaScript, HTML and CSS",
    image: "/Projects/Project 2.png",
    tags: "HTML/CSS, JavaScript, TailwindCSS",
    demoUrl: "https://aerohubnigeria.netlify.app/",
    githubUrl: "https://github.com/cohzyweb/aerohub_nigeria",
  },
  {
    id: "3",
    title: "Furniture Website",
    description: "An awesome commercial web app using HTML, CSS, and JavaScript",
    image: "/Projects/Project 3.png",
    tags: "HTML/CSS, JavaScript",
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

              <div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
