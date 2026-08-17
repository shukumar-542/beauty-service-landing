"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import clsx, { type ClassValue } from "clsx";

function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ButtonVariant = ComponentProps<typeof Button>["variant"];
type ButtonSize = ComponentProps<typeof Button>["size"];

interface DownloadButtonProps {
  name?: string;
  icon?: LucideIcon;
  iconClassName?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  glow?: boolean;
  glowClassName?: string;
  glowDuration?: string;
  rotateIcon?: boolean;
  /**
   * Tailwind gradient stop classes, e.g. "from-pink-400 to-orange-300".
   * When passed, the button gets a gradient background + white text.
   * When omitted, the button stays white with dark text.
   */
  gradient?: string;
  onClick?: () => void;
}

export default function DownloadButton({
  name = "Download App",
  icon: Icon = ArrowUpRight,
  iconClassName,
  variant = "gradient",
  size = "lg",
  className,
  glow = true,
  glowClassName,
  glowDuration = "8s",
  rotateIcon = true,
  gradient,
  onClick,
}: DownloadButtonProps) {
  return (
    <div className="relative inline-flex overflow-hidden rounded-full p-0.5">
      {glow && (
        <span
          className={cx(
            "absolute inset-[-300%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_55%,#f472b6_70%,#fdba74_85%,transparent_100%)]",
            glowClassName
          )}
          style={{ animationDuration: glowDuration }}
        />
      )}

      <Button
        onClick={onClick}
        variant={gradient ? "ghost" : variant}
        size={size}
        className={cx(
          "group relative rounded-full px-6 py-5 cursor-pointer",
          gradient
            ? `bg-linear-to-r ${gradient} hover:opacity-90`
            : "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50",
          className
        )}
      >
        {name}
        <Icon
          className={cx(
            "h-4 w-4 transition-transform duration-300",
            rotateIcon && "group-hover:rotate-45",
            iconClassName
          )}
        />
      </Button>
    </div>
  );
}