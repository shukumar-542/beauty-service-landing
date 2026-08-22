"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import clsx, { type ClassValue } from "clsx";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

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
  onClick?: () => void;
}

export default function DownloadButton({
  name = "Download App",
  icon: Icon = ArrowUpRight,
  iconClassName,
  size = "lg",
  className,
  glow = true,
  glowClassName,
  glowDuration = "8s",
  rotateIcon = true,
  onClick,
}: DownloadButtonProps) {
  return (
    <div className="relative inline-flex overflow-hidden rounded-full p-0.5">
      {glow && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-[-300%] animate-spin",
            "bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_55%,#f472b6_70%,#fdba74_85%,transparent_100%)]",
            glowClassName
          )}
          style={{ animationDuration: glowDuration }}
        />
      )}

      <Button
        type="button"
        onClick={onClick}
        size={size}
        variant="gradient"
        className={cn(
          "group relative cursor-pointer rounded-full px-6 py-5",
          
          className
        )}
      >
        <span>{name}</span>

        <Icon
          aria-hidden="true"
          className={cn(
            "h-4 w-4 transition-transform duration-300",
            rotateIcon && "group-hover:rotate-45",
            iconClassName
          )}
        />
      </Button>
    </div>
  );
}