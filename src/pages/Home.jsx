import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToogle";
import {StarBackground} from "@/components/StarBackground"; 
import { HeroSection } from "../components/HeroSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
         {/* Theme Toogle */}
         <ThemeToggle />

        {/* Background Effect */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection/>
        </main>

        {/* Footer */}
    </div>
  );
}