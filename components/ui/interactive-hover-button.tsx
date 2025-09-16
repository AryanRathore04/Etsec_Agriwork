import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/components/ui/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-full border border-[#2B2B2B] bg-[#2B2B2B] text-white transition-colors duration-300 min-w-fit flex items-center gap-3 px-6 py-3 font-semibold",
        className
      )}
      {...props}
    >
      {/* Expanding background animation - starts from left */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-0 h-2 w-2 scale-[1] rounded-full bg-white transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:translate-y-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-white"></div>

      {/* Text that slides out */}
      <span className="relative z-20 ml-3 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>

      {/* Text + arrow that slides in from right */}
      <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-gray-900 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="h-4 w-4 ml-1" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
