import { cn } from "@/lib/utils";

export const SectionHeading = ({
  eyebrow,
  title,
  accent,
  description,
  className,
}) => {
  return (
    <div className={cn("mb-14 text-center", className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-xs font-medium tracking-widest uppercase rounded-full border border-primary/20 bg-primary/5 text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
        {title}{" "}
        {accent && <span className="text-gradient">{accent}</span>}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
