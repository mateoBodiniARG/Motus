"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  HeartPulse,
  Clock4,
  Microscope,
  Star,
  Award,
  Users,
  Stethoscope,
  Smile,
  Activity,
  CheckCircle,
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────── */
const stats = [
  { value: 10, suffix: "+", label: "Años de experiencia", icon: Award },
  { value: 570, suffix: "+", label: "Pacientes atendidos", icon: Users },
  { value: 5, suffix: "", label: "Especialidades", icon: Stethoscope },
  { value: 4.9, suffix: "★", label: "Reseñas de Google", icon: Star },
];

const benefits = [
  {
    icon: Smile,
    title: "Seguimiento Personalizado",
    desc: "Nos preocupamos por tu evolución, preguntando por tu estado y progreso.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: CheckCircle,
    title: "Calidad del Espacio",
    desc: "Instalaciones impecables y muy bien cuidadas para tu máximo confort.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: HeartPulse,
    title: "Calidad Profesional",
    desc: "Un equipo altamente capacitado y sumamente querido por sus pacientes.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: Activity,
    title: "Enfoque Preventivo",
    desc: "No solo tratamos lesiones, sino que mejoramos tu salud y bienestar general.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

/* ─── Animated counter hook ─────────────────────────────────── */
function useCounter(target: number, duration = 1400, triggered: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const isDecimal = target % 1 !== 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, triggered]);
  return count;
}

function StatCard({
  stat,
  index,
  triggered,
}: {
  stat: (typeof stats)[0];
  index: number;
  triggered: boolean;
}) {
  const count = useCounter(stat.value, 1400, triggered);
  const Icon = stat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={triggered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.2 + index * 0.1, ease: "easeOut" }}
      className="flex flex-col items-center justify-center rounded-2xl bg-background/80 backdrop-blur-sm border border-border/40 p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <Icon className="mb-1.5 h-4 w-4 text-primary" strokeWidth={1.75} />
      <span className="text-xl font-extrabold tracking-tight text-foreground">
        {count}
        {stat.suffix}
      </span>
      <span className="mt-0.5 text-center text-[11px] leading-snug text-muted-foreground">
        {stat.label}
      </span>
    </motion.div>
  );
}

/* ─── Section ─────────────────────────────────────────────────── */
export function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative bg-background py-16 sm:py-24 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Nuestra Propuesta
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Cuidado integral para tu{" "}
            <span className="text-primary">bienestar</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Un equipo humano apasionado por acompañarte en cada paso hacia una mejor calidad de vida.
          </p>
        </motion.div>

        {/* ── Bento Grid Layout ── */}
        <div className="mx-auto max-w-6xl space-y-6">
          
          {/* Top Row: Image & Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-7 relative min-h-[350px] lg:min-h-[440px] rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5 group"
            >
              <Image
                src="/2024-03-28.webp"
                alt="Instalaciones de Mōtus Clínica Integral"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/90 text-white shadow-inner">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-bold text-white leading-tight">
                        Espacio ideal para tu recuperación
                      </p>
                      <p className="text-xs text-white/80 mt-0.5">
                        Instalaciones equipadas para tu bienestar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-center rounded-3xl bg-muted/40 p-8 sm:p-10 shadow-sm ring-1 ring-black/5 border border-border"
            >
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  En <strong className="font-semibold text-foreground">Mōtus Clínica Integral</strong>, nuestra misión es brindarte un cuidado personalizado y humano, enfocándonos tanto en la recuperación de lesiones como en la mejora continua de tu salud integral.
                </p>
                <div className="h-px w-12 bg-primary/20 rounded-full" />
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Con profesionales de primer nivel como <span className="text-foreground font-medium">Facundo, Estanislao y Ramiro</span>, garantizamos un seguimiento constante de tu evolución en un espacio pensado exclusivamente para tu bienestar.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Middle Row: Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} triggered={inView} />
            ))}
          </div>

          {/* Bottom Row: Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group flex flex-col gap-4 rounded-3xl bg-background p-6 shadow-sm ring-1 ring-black/5 border border-border hover:shadow-md transition-all"
                >
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${b.bg} ${b.color} transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1.5 break-words">
                      {b.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
