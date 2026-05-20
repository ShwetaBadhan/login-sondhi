import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Plane,
  Globe2,
  ShieldCheck,
  Sparkles,
  Moon,
  Sun,
  ArrowRight,
  Loader2,
} from "lucide-react";
import HeroVisual from "./HeroVisual";
import heroImg from "@/assets/login-hero.jpg";

const cities = [
  { code: "DXB", label: "Dubai" },
  { code: "LHR", label: "London" },
  { code: "JFK", label: "New York" },
  { code: "SIN", label: "Singapore" },
];

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  return now;
}

function CityClock({ tz, code, label }: { tz: string; code: string; label: string }) {
  const now = useClock();
  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: tz,
  }).format(now);
  return (
    <div className="flex flex-col items-start">
      <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">{code}</span>
      <span className="text-sm font-semibold text-white">{time}</span>
      <span className="text-[10px] text-white/50">{label}</span>
    </div>
  );
}

export default function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1600);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.17_200/0.35),transparent_70%)] blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.58_0.25_295/0.35),transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.22_260/0.30),transparent_70%)] blur-3xl" />
      </div>

      {/* Top bar */}
      <header className="relative z-20 flex items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-2.5">
          <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-glow">
            <Plane className="h-4 w-4 text-white" strokeWidth={2.5} />
            <span className="absolute inset-0 animate-pulse-glow rounded-xl bg-gradient-brand opacity-40 blur-md" />
          </div>
          <div className="leading-tight">
            <p className="text-[15px] font-semibold tracking-tight" style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}>
              Sondhi Travels
            </p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              B2B Portal
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 rounded-full border border-border/70 bg-white/40 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-md md:inline-flex">
            <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--neon-blue)]" />
            IATA secure session
          </span>
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-white/40 text-foreground backdrop-blur-md transition hover:scale-105 hover:bg-white/60"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </header>

      <section className="relative z-10 grid min-h-[calc(100vh-80px)] grid-cols-1 gap-6 px-4 pb-10 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-12">
        {/* LEFT — Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative hidden overflow-hidden rounded-[2rem] border border-white/10 lg:block"
        >
          <img
            src={heroImg}
            alt="Holographic travel network"
            className="absolute inset-0 h-full w-full object-cover"
            width={1280}
            height={1600}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.13_0.04_265/0.55),oklch(0.13_0.04_265/0.85))]" />
          <HeroVisual />

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-between p-10">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--neon-cyan)]" />
              AI-powered fares engine
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h2
                  className="text-balance text-4xl font-semibold leading-[1.1] text-white xl:text-5xl"
                  style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
                >
                  The skies, <span className="text-gradient-brand">orchestrated</span>
                  <br />for modern agencies.
                </h2>
                <p className="mt-4 max-w-md text-sm text-white/70">
                  Live inventory across 900+ airlines, 1.2M hotels and instant ticketing — all from one beautifully fast B2B console.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="grid grid-cols-2 gap-3 md:grid-cols-4"
              >
                <CityClock tz="Asia/Dubai" code="DXB" label="Dubai" />
                <CityClock tz="Europe/London" code="LHR" label="London" />
                <CityClock tz="America/New_York" code="JFK" label="New York" />
                <CityClock tz="Asia/Singapore" code="SIN" label="Singapore" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  { k: "Live bookings", v: "12,438" },
                  { k: "Routes today", v: "3,201" },
                  { k: "Avg. issue time", v: "1.8s" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md"
                  >
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/55">{s.k}</p>
                    <p className="mt-0.5 text-lg font-semibold text-white">{s.v}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Login card */}
        <div className="relative flex items-center justify-center">
          {/* Decorative glow behind card */}
          <div className="pointer-events-none absolute inset-10 -z-10 rounded-[2.5rem] bg-gradient-brand opacity-30 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            className="glass-card w-full max-w-md rounded-3xl p-7 sm:p-9"
          >
            <div className="mb-7 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand">
                  <Plane className="h-4 w-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-semibold tracking-tight">Sondhi Travels</span>
              </div>
              <span className="rounded-full bg-foreground/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Agent login
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-3xl font-semibold tracking-tight sm:text-[34px]"
              style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            >
              Welcome <span className="text-gradient-brand">Back</span>
            </motion.h1>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Login to access your B2B travel dashboard.
            </p>

            <form onSubmit={onSubmit} className="mt-7 space-y-4">
              <Field
                id="email"
                label="Work email"
                icon={<Mail className="h-4 w-4" />}
                type="email"
                placeholder="agent@sondhitravels.com"
                autoComplete="email"
                required
              />
              <Field
                id="password"
                label="Password"
                icon={<Lock className="h-4 w-4" />}
                type={showPwd ? "text" : "password"}
                placeholder="••••••••••••"
                autoComplete="current-password"
                required
                trailing={
                  <button
                    type="button"
                    onClick={() => setShowPwd((s) => !s)}
                    className="text-muted-foreground transition hover:text-foreground"
                    aria-label={showPwd ? "Hide password" : "Show password"}
                  >
                    {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                }
              />

              <div className="flex items-center justify-between pt-1 text-sm">
                <label className="flex cursor-pointer items-center gap-2 text-muted-foreground">
                  <span className="relative inline-flex h-4 w-4 items-center justify-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="peer absolute inset-0 cursor-pointer appearance-none rounded-[5px] border border-border bg-white/60 checked:border-transparent checked:bg-gradient-brand"
                    />
                    <svg
                      viewBox="0 0 16 16"
                      className="pointer-events-none relative h-3 w-3 text-white opacity-0 peer-checked:opacity-100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Remember me
                </label>
                <a
                  href="#"
                  className="font-medium text-foreground/80 transition hover:text-[color:var(--neon-blue)]"
                >
                  Forgot password?
                </a>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.985 }}
                className="group relative mt-2 flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-brand text-sm font-semibold text-white shadow-glow transition disabled:opacity-80"
              >
                <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,oklch(1_0_0/0.35),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Securing your session…
                  </>
                ) : (
                  <>
                    Sign in to dashboard
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </motion.button>

              <div className="relative my-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                or continue with
                <span className="h-px flex-1 bg-border" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <SocialButton label="Google" provider="google" />
                <SocialButton label="Microsoft" provider="microsoft" />
              </div>
            </form>

            <p className="mt-7 text-center text-xs text-muted-foreground">
              New travel partner?{" "}
              <a href="#" className="font-medium text-foreground hover:text-[color:var(--neon-blue)]">
                Request agency access
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 px-6 pb-6 text-center text-[11px] text-muted-foreground md:px-10">
        © {new Date().getFullYear()} Sondhi Travels — Crafted for the world's finest travel agencies. PCI-DSS · IATA · SOC 2.
      </footer>
    </main>
  );
}

function Field({
  id,
  label,
  icon,
  trailing,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon: React.ReactNode;
  trailing?: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-foreground/80">
        {label}
      </label>
      <div className="glow-ring group relative flex h-12 items-center rounded-xl border border-border bg-white/60 px-3.5 backdrop-blur-md transition focus-within:bg-white/80 dark:bg-white/5 dark:focus-within:bg-white/10">
        <span className="mr-2.5 text-muted-foreground transition group-focus-within:text-[color:var(--neon-blue)]">
          {icon}
        </span>
        <input
          id={id}
          {...rest}
          className="h-full w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
        />
        {trailing && <span className="ml-2">{trailing}</span>}
      </div>
    </div>
  );
}

function SocialButton({ label, provider }: { label: string; provider: "google" | "microsoft" }) {
  return (
    <button
      type="button"
      className="group relative flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-white/60 text-sm font-medium text-foreground backdrop-blur-md transition hover:border-transparent hover:bg-white/80 hover:shadow-glow dark:bg-white/5 dark:hover:bg-white/10"
    >
      {provider === "google" ? <GoogleIcon /> : <MicrosoftIcon />}
      {label}
    </button>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 48 48" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.9 6.5 29.2 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5c10.7 0 19.5-7.7 19.5-19.5 0-1.3-.1-2.3-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.1l6.6 4.8C14.7 15.3 19 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.9 6.5 29.2 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.1z"/>
      <path fill="#4CAF50" d="M24 43.5c5.1 0 9.8-1.9 13.3-5.1l-6.1-5c-2 1.4-4.5 2.2-7.2 2.2-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.6 39 16.3 43.5 24 43.5z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l6.1 5c-.4.4 6.6-4.8 6.6-14.5 0-1.3-.1-2.3-.4-3.5z"/>
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden>
      <rect width="10" height="10" x="1" y="1" fill="#F25022" />
      <rect width="10" height="10" x="13" y="1" fill="#7FBA00" />
      <rect width="10" height="10" x="1" y="13" fill="#00A4EF" />
      <rect width="10" height="10" x="13" y="13" fill="#FFB900" />
    </svg>
  );
}