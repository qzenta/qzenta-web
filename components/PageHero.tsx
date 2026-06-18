import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  sub?: string;
  image: string;
  imageAlt?: string;
  /** Tailwind gradient for the overlay — defaults to dark onyx */
  overlay?: string;
}

export default function PageHero({
  eyebrow,
  title,
  sub,
  image,
  imageAlt = "",
  overlay = "from-[#0C2228]/85 via-[#0C2228]/70 to-[#0C2228]/50",
}: PageHeroProps) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden min-h-[40vh] flex items-end">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
        aria-hidden={!imageAlt}
      />
      <div className={`absolute inset-0 bg-gradient-to-r ${overlay}`} />
      {/* Bottom fade into page body */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#07191E] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto w-full pb-2">
        <p className="text-spring-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          {eyebrow}
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-onyx-50 tracking-tight leading-tight max-w-3xl">
          {title}
        </h1>
        {sub && (
          <p className="mt-4 text-lg text-onyx-500 max-w-2xl leading-relaxed">{sub}</p>
        )}
      </div>
    </section>
  );
}
