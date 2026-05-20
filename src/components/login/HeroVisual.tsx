import { motion } from "motion/react";
import { Plane } from "lucide-react";

/**
 * Decorative overlay rendered on top of the hero image:
 * - SVG arcs simulating flight paths with dashed animation
 * - Floating glass cards
 * - Particle field
 */
export default function HeroVisual() {
  const particles = Array.from({ length: 22 });

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Particles */}
      {particles.map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const delay = (i % 6) * 0.4;
        const size = (i % 3) + 2;
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0], y: [-6, -28, -6] }}
            transition={{ duration: 6 + (i % 4), delay, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full bg-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              boxShadow: "0 0 12px oklch(0.82 0.17 200 / 0.9)",
            }}
          />
        );
      })}

      {/* Flight path arcs */}
      <svg
        viewBox="0 0 600 800"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="arc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.82 0.17 200)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="oklch(0.82 0.17 200)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.58 0.25 295)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {[
          "M40,620 Q300,260 560,540",
          "M80,720 Q320,420 540,300",
          "M60,500 Q260,180 520,200",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="url(#arc)"
            strokeWidth={1.2}
            className="animate-dash"
            style={{ animationDelay: `${i * 0.8}s` }}
          />
        ))}
      </svg>

      {/* Floating glass cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="animate-float absolute right-10 top-28 w-56 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/60">
          <span>Boarding</span>
          <span className="text-[color:var(--neon-cyan)]">On time</span>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <div className="text-center">
            <p className="text-xl font-semibold text-white">DXB</p>
            <p className="text-[10px] text-white/55">21:40</p>
          </div>
          <div className="relative flex-1">
            <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/60 to-white/10" />
            <Plane className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-90 text-[color:var(--neon-cyan)]" />
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-white">LHR</p>
            <p className="text-[10px] text-white/55">02:15+1</p>
          </div>
        </div>
        <p className="mt-2 text-[10px] text-white/55">EK 003 · A380 · Business</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{ animationDelay: "1.5s" }}
        className="animate-float absolute bottom-32 left-10 w-52 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
      >
        <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">Live fare</p>
        <p className="mt-1 text-2xl font-semibold text-white">
          $612<span className="ml-1 text-xs font-medium text-white/55">/pax</span>
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[color:var(--neon-cyan)]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--neon-cyan)]" />
          12 seats left in J class
        </div>
      </motion.div>
    </div>
  );
}