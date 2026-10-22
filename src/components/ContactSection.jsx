import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Send,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "cohzyweb@gmail.com",
    href: "mailto:cohzyweb@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+234) 807 093 9528",
    href: "tel:+2348070939528",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos State, Nigeria",
  },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/boluwatife-ogunjana-16a806212",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://x.com/Ze_rith", icon: Twitter },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_ze_rith?igsh=bDI3OWdtczk5cjhv",
    icon: Instagram,
  },
  { name: "Facebook", href: "https://www.facebook.com/share/1EjeNfCgHd/", icon: Facebook },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Let's talk"
          title="Get In"
          accent="Touch"
          description="Have a project in mind or looking to collaborate? Feel free to reach out anytime — I'm always happy to discuss new ideas and opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Reveal key={info.label} delay={index * 100}>
                  <div className="glass p-5 rounded-2xl flex items-center gap-4 card-hover group">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/15 transition-all duration-300 group-hover:scale-105">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm text-muted-foreground mb-0.5">
                      {info.label}
                    </h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="font-medium">{info.value}</span>
                    )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <div className="glass p-6 rounded-2xl">
                <h4 className="font-display font-medium mb-4 text-center">
                  Connect With Me
                </h4>
                <div className="flex gap-3 justify-center">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="glass p-3 rounded-full text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="h-full">
          <div className="glass-strong p-8 rounded-2xl h-full">
            <h3 className="font-display text-2xl font-semibold mb-6">
              Send A Message
            </h3>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 backdrop-blur-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                  placeholder="John Doe..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 backdrop-blur-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 backdrop-blur-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button type="submit" className="cosmic-button w-full">
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
