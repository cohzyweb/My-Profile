import { useState, useEffect } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 14000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 0.5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.2,
        animationDuration: Math.random() * 4 + 3,
      });
    }

    setStars(newStars);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Aurora glow blobs */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full blur-[120px] opacity-30 dark:opacity-25 animate-aurora"
        style={{
          background:
            "radial-gradient(circle, hsl(245 72% 66% / 0.7) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-1/4 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] opacity-20 dark:opacity-25 animate-aurora"
        style={{
          background:
            "radial-gradient(circle, hsl(276 80% 72% / 0.65) 0%, transparent 70%)",
          animationDelay: "-8s",
          animationDuration: "20s",
        }}
      />
      <div
        className="absolute -bottom-1/4 left-1/3 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full blur-[120px] opacity-15 dark:opacity-20 animate-aurora"
        style={{
          background:
            "radial-gradient(circle, hsl(210 90% 65% / 0.6) 0%, transparent 70%)",
          animationDelay: "-4s",
          animationDuration: "24s",
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
