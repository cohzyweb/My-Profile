import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300", 
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>

            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        {""}
                        <span className="text-glow text-foreground">Cohzyweb</span> Portfolio
                    </span>
                </a>

                {/* desktop nav*/}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile version */}
                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={item.href} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 text-xl py-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile nav */}
                <button 
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-6 flex flex-col justify-center">
                        <span className={cn("w-full h-0.5 bg-foreground transition-all duration-300", 
                            isMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                        )}></span>
                        <span className={cn("w-full h-0.5 bg-foreground transition-all duration-300 mt-1", 
                            isMenuOpen ? "opacity-0" : "opacity-100"
                        )}></span>
                        <span className={cn("w-full h-0.5 bg-foreground transition-all duration-300 mt-1", 
                            isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                        )}></span>
                    </div>
                </button>
            </div>
        </nav>
    );
}