import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-6 w-full max-w-2xl mx-auto mb-16 animate-fade-in",
        className
      )}
    >
      {/* Left Line */}
      <div className="h-[1px] bg-primary/40 flex-1 rounded-full"></div>

      {/* Title Text */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight whitespace-nowrap">
        {children}
      </h2>

      {/* Right Line */}
      <div className="h-[1px] bg-primary/40 flex-1 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
