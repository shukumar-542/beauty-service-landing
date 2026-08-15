import { ShieldCheck, ToggleRight, Star, CheckCheck, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified professionals",
    description: "Every artist is reviewed for craft, care, and credentials.",
  },
  {
    icon: ToggleRight,
    title: "Secure booking",
    description: "Your time, details, and payment are always protected.",
  },
  {
    icon: Star,
    title: "Real reviews",
    description: "Honest notes from people with beauty standards like yours.",
  },
  {
    icon: CheckCheck,
    title: "Instant confirmation",
    description: "Know exactly when your appointment is set.",
  },
  {
    icon: Clock,
    title: "Flexible scheduling",
    description: "Make room for beauty, on your own time.",
  },
  {
    icon: Heart,
    title: "Safe payments",
    description: "Transparent pricing with no unexpected extras.",
  },
];

export default function StunnerStandard() {
  return (
    <section className="bg-linear-to-br from-[#fdf1ef] via-[#fdf3f1] to-[#fef8f5] px-6 py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Left column */}
        <div>
          <div className="mb-5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
            <span className="text-xs font-semibold tracking-widest text-rose-400">
              THE STUNNER STANDARD
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-[1.15] text-neutral-900 sm:text-5xl">
            We make <em className="italic">good taste</em> easy to find.
          </h2>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-neutral-500">
            From your first search to the mirror moment after, Stunner makes
            booking beauty feel considered, calm, and completely yours.
          </p>
        </div>

        {/* Right column: feature grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-black/3 bg-white/70 p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-sm"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-rose-100">
                <Icon className="h-4 w-4 text-rose-400" strokeWidth={2} />
              </div>
              <h3 className="text-[15px] font-semibold text-neutral-900">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}