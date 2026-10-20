import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
        "w-[calc(100%-2rem)] max-w-3xl mt-4 rounded-2xl",
        isScrolled || isMenuOpen
          ? "glass-strong shadow-lg shadow-primary/5 py-2.5"
          : "py-3"
      )}
    >
      <div className="flex items-center justify-between px-4 sm:px-5">
        {/* Logo */}
        <a className="flex items-center gap-2.5 group" href="#hero">
          <img
            src="/logo.svg"
            alt="Cohzyweb logo"
            className="h-8 w-8 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display font-semibold tracking-tight text-[15px]">
            Cohzyweb
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "relative px-3.5 py-1.5 text-sm rounded-full transition-colors duration-300",
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeSection === item.id && (
                <span className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20" />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />

          {/* mobile nav button */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary/60 transition-colors"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-out",
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-4 pt-3 pb-2 border-t border-border/60 mt-3">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "px-3 py-2.5 rounded-xl text-[15px] transition-all duration-300",
                activeSection === item.id
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60",
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              )}
              style={{ transitionDelay: isMenuOpen ? `${index * 40}ms` : "0ms" }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
