import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">
                        Ogunjana
                    </span>
                    <span className="text-gradient-primary ml-2 opacity-0 animate-fade-in-delay-2">Boluwatife</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I am a web developer who enjoys building clean, functional, and user-focused projects.
                     I'm here to connect, learn from others, share what I know, and grow with the community. 
                     Looking forward to collaborating, contributing, and meeting like-minded creatives here!
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-i/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2 "> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
}