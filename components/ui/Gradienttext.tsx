export default function GradientText({text}: {text?: string}) {
  return (
    <h1 className="font-serif text-4xl sm:text-6xl">
      <span className="bg-linear-to-r from-[#FFA3FF] to-[#FFB172] bg-clip-text  text-transparent">
         {text || "Stunner Alert"} 
      </span>{" "}
    
    </h1>
  );
}