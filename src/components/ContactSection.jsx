import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or looking to collaborate on something exciting?
                    Feel free to reach out anytime. I’m always open and happy to discuss
                    new ideas, creative projects, and potential opportunities to work together.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:cohzyweb@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        cohzyweb@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+2347018961857"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        (+234) 701 896 1857
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <span className="text-muted-foreground">
                                        Lagos State, Nigeria
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4 text-center">
                                Connect With Me
                            </h4>
                            <div className="flex space-x-6 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/boluwatife-ogunjana-16a806212"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="h-6 w-6 text-primary" />
                                </a>
                                <a
                                    href="https://x.com/Ze_rith"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Twitter className="h-6 w-6 text-primary" />
                                </a>
                                <a
                                    href="https://www.instagram.com/_ze_rith?igsh=bDI3OWdtczk5cjhv"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Instagram className="h-6 w-6 text-primary" />
                                </a>
                                <a
                                    href="https://www.facebook.com/share/1EjeNfCgHd/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Facebook className="h-6 w-6 text-primary" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send A Message
                        </h3>

                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Cohzy Web..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="johndoe@gmail.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center"
                                )}
                            >
                                Send Message
                               <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
