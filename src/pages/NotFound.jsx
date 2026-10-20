import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { StarBackground } from "@/components/StarBackground";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <StarBackground />

      <div className="relative z-10 text-center space-y-6">
        <p className="font-display text-[8rem] sm:text-[12rem] leading-none font-bold text-gradient opacity-90">
          404
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
          You&apos;ve drifted into deep space
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          This page doesn&apos;t exist — but your next destination is just a
          click away.
        </p>
        <Link to="/" className="cosmic-button inline-flex">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};
