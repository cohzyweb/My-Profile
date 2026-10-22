import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "MySQL", level: 75, category: "backend" },
  { name: "PHP", level: 70, category: "backend" },

  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleLevels, setVisibleLevels] = useState({});
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setVisibleLevels((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }));
            }, index * 80);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-28 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="What I work with"
          title="My"
          accent="Skills"
          description="Technologies and tools I use to bring ideas to life."
        />

        <Reveal className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-transparent shadow-md shadow-primary/25"
                  : "bg-card/50 text-muted-foreground border-border hover:text-foreground hover:border-primary/30"
              )}
            >
              {category}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, key) => (
            <Reveal key={skill.name} delay={key * 60}>
              <div className="glass p-5 rounded-2xl card-hover group h-full">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-medium text-[15px]">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
                    style={{ width: `${visibleLevels[skill.name] ?? 0}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
