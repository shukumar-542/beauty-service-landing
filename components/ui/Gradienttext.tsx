type GradientTextProps = {
  text?: string;
  className?: string;
};

export default function GradientText({
  text,
  className = "",
}: GradientTextProps) {
  return (
    <h1 className={`font-serif ${className}`}>
      <span className="bg-linear-to-r from-[#FFA3FF] to-[#FFB172] bg-clip-text text-transparent">
        {text || "Stunner Alert"}
      </span>
    </h1>
  );
}