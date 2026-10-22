import { Briefcase, User, Code } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Creating responsive websites and web applications with modern frameworks.",
  },
  {
    icon: User,
    title: "Problem Solving",
    description:
      "Finding efficient solutions to complex technical challenges.",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description:
      "Leading projects from conception to completion with agile methods.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading eyebrow="Get to know me" title="About" accent="Me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
              Passionate Web Developer &amp; Tech Creator
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              With over 3 years of experience in web development, I specialize
              in creating responsive, accessible and performant web
              applications using modern technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m passionate about creating elegant solutions to complex
              problems, and I&apos;m constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://docs.google.com/document/d/1LxKiqc_6yU9jAOX3JoZmrYVpKa6HvlCPc1C4othInhA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button-ghost"
              >
                Download CV
              </a>
            </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 120}>
                <div className="gradient-border p-6 card-hover group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/15 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-105">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-display font-semibold text-lg mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
