type GradientTextProps = {
  text?: string;
  className?: string;
};

export default function GradientText({
  text,
  className = "",
}: GradientTextProps) {
  return (
      <span className={`font-serif ${className} bg-linear-to-r from-[#FFA3FF] to-[#FFB172] bg-clip-text text-transparent`}>
        {text || "Stunner Alert"}
      </span>
  );
}