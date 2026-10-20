import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/cohzyweb", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/boluwatife-ogunjana-16a806212",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://x.com/Ze_rith", icon: Twitter },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a className="flex items-center gap-2.5 group" href="#hero">
            <img
              src="/logo.svg"
              alt="Cohzyweb logo"
              className="h-8 w-8"
            />
            <span className="font-display font-semibold tracking-tight">
              Cohzyweb
            </span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Socials + back to top */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <social.icon size={17} />
              </a>
            ))}
            <a
              href="#hero"
              aria-label="Back to top"
              className="ml-1 p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Boluwatife Ogunjana. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
};
