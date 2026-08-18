import { ShieldCheck, ToggleRight, Star, CheckCheck, Clock, Heart } from "lucide-react";
import StaggerGrid, { StaggerItem } from "../ui/StaggerGrid";
import AnimatedContent from "../ui/AnimatedContent";
import TagText from "../ui/TagText";

const features = [
  {
    icon: ShieldCheck,
    iconColor: "#1A5A52",
    title: "Verified professionals",
    description: "Every professional on our platform is carefully selected based on quality, skill and professionalism.",
  },
  {
    icon: ToggleRight,
    title: "Real-time booking",
    iconColor: "#C378A2",
    description: "See real-time availability and lock in exact time slots instantly.",
  },
  {
    icon: Star,
    iconColor: "#C378A2",
    title: "Real reviews",
    description: "Authentic ratings from real clients and before-and-after pictures",
  },
  {
    icon: CheckCheck,
    title: "Instant confirmation",
    iconColor: "#C378A2",
    description: "No time wasted waiting for price quotes or back-and-forth messaging.",
  },
  {
    icon: Clock,
    title: " Dedicated support",
    iconColor: "#C378A2",
    description: "Friendly, fast assistance whenever you need help with a booking.",
  },
  {
    icon: Heart,
    title: "Safe payments",
    iconColor: "#C378A2",
    description: "Your payments are secure. Transparent pricing with no unexpected surprises.",
  },
];

export default function StunnerStandard() {
  return (
    <section className="bg-linear-to-br from-[#fdf1ef] via-[#fdf3f1] to-[#fef8f5] px-6 py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Left column */}
        <AnimatedContent
          direction="up"
          delay={0.2}
          duration={0.6}
          distance={30}
          once={false}
        >
          <TagText text={"THE STUNNER STANDARD"} />

          <h2 className="font-serif text-4xl leading-tight text-neutral-900 sm:text-5xl">
            A premium app designed to make  booking Australia's best professionals easier than ever.
          </h2>

          <p className="mt-6  text-[15px] leading-relaxed text-[#766975]">
            Booking beauty and photography used to mean endless messages, hidden pricing and uncertainty. Stunner Alert brings Australia's finest talent together onto one seamless platform. Built on transparency, strict screening, and instant booking, we give you total confidence that you'll look and feel like a Stunner every single time.
          </p>
        </AnimatedContent>

        {/* Right column: feature grid */}
        <StaggerGrid
          staggerDelay={0.2}
          once={false}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description, iconColor }) => (
            <StaggerItem
              distance={30}
              duration={0.8}
              key={title}
              className="rounded-2xl border border-black/3 bg-white/70 p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-sm"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-t from-[#FFE1FB] to-[#FFE1C8] shadow-2xs" >
                <Icon className={`h-4 w-4 `} style={{ color: iconColor }} strokeWidth={2} />
              </div>
              <h3 className="text-[15px] font-semibold text-neutral-900">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                {description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section >
  );
}