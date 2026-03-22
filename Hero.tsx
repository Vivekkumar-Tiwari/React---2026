import Image from "next/image";
import Link from "next/link";

// ─── Pill badge displayed above the headline ──────────────────────────────
function Badge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-6 select-none">
      <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
      AI-Powered Creative Platform
    </div>
  );
}

// ─── Stat chip ───────────────────────────────────────────────────────────────
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-white">{value}</span>
      <span className="text-xs text-gray-500 mt-0.5">{label}</span>
    </div>
  );
}

// ─── Image category tag chip ─────────────────────────────────────────────────
const CATEGORIES = [
  "Pictures",
  "Illustrations",
  "3D Illustrations",
  "Notion Style",
  "No background",
];

function CategoryChips() {
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {CATEGORIES.map((cat, i) => (
        <button
          key={cat}
          id={`category-chip-${i}`}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${
            i === 0
              ? "bg-white text-gray-900 border-transparent hover:bg-gray-100"
              : "bg-transparent text-gray-300 border-white/20 hover:border-white/40 hover:text-white"
          }`}
        >
          {cat}
          {cat === "No background" && (
            <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-orange-500 text-white rounded-full align-middle">
              New
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

// ─── Small floating image card ───────────────────────────────────────────────
function ImageCard({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl group ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, 20vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

// ─── Main Grid of generated images ───────────────────────────────────────────
const GRID_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600&q=80",
    alt: "Space planet illustration",
  },
  {
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
    alt: "City street photography",
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    alt: "Portrait of a woman with fairy lights",
  },
  {
    src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=600&q=80",
    alt: "Mountain landscape illustration",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    alt: "Professional portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80",
    alt: "3D character illustration",
  },
];

function ImageShowcaseGrid() {
  return (
    <div className="relative w-full mt-8 rounded-3xl overflow-hidden bg-[#111118] border border-white/5 shadow-2xl shadow-black/60 p-4 sm:p-6">

      {/* Image grid — always 3 cols on all screens */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {GRID_IMAGES.slice(0, 3).map((img) => (
          <div key={img.src} className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
        {GRID_IMAGES.slice(3, 6).map((img) => (
          <div key={img.src} className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Overlay text + CTAs — sits on top of the grid at the bottom-left */}
      <div className="absolute bottom-5 left-5 z-10 max-w-[240px] hidden sm:block">
        <p className="text-white font-bold text-sm leading-snug drop-shadow-lg">
          Your Imaginations, Powered by AI
        </p>
        <p className="text-gray-300 text-xs mt-1 leading-relaxed drop-shadow">
          Describe your vision and transform simple prompts into breath-taking visuals instantly.
        </p>

        {/* Inline CTAs */}
        <div className="flex items-center gap-3 mt-4">
          <Link
            href="/get-started"
            id="hero-start-btn"
            className="px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold rounded-full transition-all active:scale-95 shadow-lg shadow-orange-500/30 whitespace-nowrap"
          >
            Start generating free
          </Link>
          <Link
            href="/watch-demo"
            id="hero-demo-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-semibold rounded-full transition-all active:scale-95 whitespace-nowrap"
          >
            Watch demo
            <span className="w-4 h-4 flex items-center justify-center bg-white rounded-full">
              <svg className="w-2 h-2 text-gray-900 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Gradient fade on left side so overlay text is readable */}
      <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-[#111118]/95 via-[#111118]/60 to-transparent pointer-events-none hidden sm:block" />
    </div>
  );
}

// ─── HERO SECTION ────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative w-full min-h-screen flex flex-col items-center overflow-hidden bg-[#0a0a0f] pt-32 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* ── Ambient radial glows ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        {/* Top-centre radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-blue-700/10 blur-[120px]" />
        {/* Bottom-right accent glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl w-full">

        {/* ── TOP SECTION: headline + description centred ── */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-12">
          <Badge />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl">
            Unlock Your Creativity With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Stunning Images
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
            Generate hyper-realistic images, dreamy illustrations, and cinematic
            scenes — no design skills needed.
          </p>

          {/* Category chips */}
          <CategoryChips />
        </div>

        {/* ── BOTTOM SECTION: showcase image grid ── */}
        <div className="w-full">
          <ImageShowcaseGrid />
        </div>

        {/* ── Stats row below ── */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-12 border-t border-white/5 pt-8">
          <Stat value="10M+" label="Images Generated" />
          <Stat value="500K+" label="Happy Creators" />
          <Stat value="99.9%" label="Uptime SLA" />
          <Stat value="4.9★" label="Average Rating" />
        </div>
      </div>
    </section>
  );
}
