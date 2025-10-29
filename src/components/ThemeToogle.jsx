import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import {cn} from "@/lib/utilis";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleTheme} 
    className= {cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                   "focus:outline-hidden"
    )}
    >
      {isDarkMode ? 
        <Sun className="h-6 w-6 text-yellow-300" /> : 
        <Moon className="h-6 w-6 text-blue-900" />
      }
    </button>
  );
}