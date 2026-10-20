import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { name: "GitHub", href: "https://github.com/cohzyweb", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/boluwatife-ogunjana-16a806212",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://x.com/Ze_rith", icon: Twitter },
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-20"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          {/* Avatar */}
          <div className="flex justify-center opacity-0 animate-fade-in">
            <div className="relative">
              <div className="gradient-ring absolute -inset-1.5 rounded-full opacity-80" />
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-card border border-border shadow-2xl shadow-primary/20">
                <span className="font-display text-4xl font-bold text-gradient">
                  BO
                </span>
              </div>
              <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center rounded-full bg-emerald-400 border-2 border-background">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
              </span>
            </div>
          </div>

          {/* Badge */}
          <div className="flex justify-center opacity-0 animate-fade-in-delay-1">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium rounded-full border border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Open to opportunities
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="block opacity-0 animate-fade-in-delay-1">
              Hi, I&apos;m
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              Ogunjana Boluwatife
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-3">
            A web developer who enjoys building clean, functional, and
            user-focused projects. I&apos;m here to connect, learn, share, and
            grow with the community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
              <ArrowDown size={16} />
            </a>
            <a href="#contact" className="cosmic-button-ghost">
              Get In Touch
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-3 pt-4 opacity-0 animate-fade-in-delay-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="glass p-2.5 rounded-full text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        aria-label="Scroll to about section"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-border p-1">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce" />
        </span>
      </a>
    </section>
  );
};
