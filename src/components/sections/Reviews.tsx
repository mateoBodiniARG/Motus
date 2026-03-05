"use client";

import * as React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote, ExternalLink } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const GOOGLE_REVIEWS_URL =
  "https://maps.app.goo.gl/4Zhndoz1jUcRNDRdA";
const GOOGLE_WRITE_REVIEW_URL =
  "https://maps.app.goo.gl/4Zhndoz1jUcRNDRdA";

/* ─── Google SVG logo ───────────────────────────────────────── */
function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.09 0 5.84 1.06 8.02 2.81l5.97-5.97C34.29 3.3 29.44 1 24 1 14.82 1 7.07 6.53 3.87 14.24l6.97 5.41C12.5 13.41 17.75 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.52 24.5c0-1.64-.15-3.22-.41-4.76H24v9.02h12.68c-.55 2.94-2.2 5.44-4.68 7.11l7.19 5.58C43.33 37.1 46.52 31.28 46.52 24.5z" />
      <path fill="#FBBC05" d="M10.84 28.65A14.55 14.55 0 0 1 9.5 24c0-1.62.28-3.19.77-4.65l-6.97-5.41A23.94 23.94 0 0 0 0 24c0 3.87.92 7.52 2.54 10.76l8.3-6.11z" />
      <path fill="#34A853" d="M24 47c5.44 0 10.01-1.8 13.34-4.88l-7.19-5.58c-1.88 1.27-4.3 2.01-6.15 2.01-6.25 0-11.5-3.91-13.16-9.4l-8.3 6.11C7.07 41.47 14.82 47 24 47z" />
    </svg>
  );
}

/* ─── Stars ─────────────────────────────────────────────────── */
function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const cls = size === "lg" ? "h-5 w-5" : size === "md" ? "h-4 w-4" : "h-3.5 w-3.5";
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${cls} ${i <= rating ? "fill-yellow-400 text-yellow-400" : "fill-zinc-200 text-zinc-200"}`}
        />
      ))}
    </div>
  );
}

/* ─── Real reviews from Google ──────────────────────────────── */
const OVERALL_RATING = 4.9;
const TOTAL_REVIEWS = 39;

const reviews = [
  {
    name: "Cielo Gallo",
    badge: "Local Guide",
    text: "¡Excelente lugar! El espacio es hermoso, limpio y muy bien cuidado. Los profesionales son de primera y la atención súper personalizada. Estoy profundamente agradecida con todos, especialmente con Facundo, Estanislao y Ramiro — ¡unos cracks!",
    rating: 5,
    date: "hace 6 meses",
    initials: "CG",
    color: "bg-violet-500",
  },
  {
    name: "Mel M",
    badge: "Paciente verificada",
    text: "Excelente lugar con muy buenos profesionales. La atención de kinesiología es impecable, hacen un seguimiento personalizado y se interesan por tu bienestar como paciente. 100% recomendado.",
    rating: 5,
    date: "hace 5 meses",
    initials: "MM",
    color: "bg-sky-500",
  },
  {
    name: "Miguel Soldano",
    badge: "Local Guide",
    text: "Me encanta Môtus!! Sin duda tiene los mejores profesionales. Me ayudaron siempre con dolores o lesiones, con miles de recursos. Además son súper organizados, hay puntualidad, orden y limpieza. Lo elijo siempre. 🚀",
    rating: 5,
    date: "hace 7 meses",
    initials: "MS",
    color: "bg-emerald-500",
  },
  {
    name: "Angie Calore",
    badge: "Paciente verificada",
    text: "Excelente lugar: el equipo es súper profesional y humano. En el Gym la experiencia es única; te acompañan con rutinas pensadas a tu medida, adaptadas a tus capacidades y enfocadas en tu salud. Me siento cada vez mejor!",
    rating: 5,
    date: "hace 6 meses",
    initials: "AC",
    color: "bg-amber-500",
  },
  {
    name: "Betty Peralta",
    badge: "Paciente verificada",
    text: "Orgullosa de pertenecer a esta clínica desde hace más de 6 años. Es un lugar que siento como propio, con un equipo humano increíble, cálido y comprometido. Se trabaja con profesionalismo y dedicación.",
    rating: 5,
    date: "hace 6 meses",
    initials: "BP",
    color: "bg-pink-500",
  },
  {
    name: "Ana Sanguineti",
    badge: "Paciente verificada",
    text: "Hace ya 4 años que asisto y estoy sumamente conforme y agradecida al trato que me dispensan. Es un espacio agradable, con buena compañía junto al excelente profesor Facundo.",
    rating: 5,
    date: "hace 6 meses",
    initials: "AS",
    color: "bg-indigo-500",
  },
  {
    name: "Paciente Feliz",
    badge: "Paciente verificada",
    text: "Estoy asistiendo a sesiones en el gimnasio y solo puedo decir que la propuesta es la mejor. Fui por dolores que están desapareciendo. ¡El profe Estanislao es súper simpático y de un profesionalismo impecable!",
    rating: 5,
    date: "hace 6 meses",
    initials: "PF",
    color: "bg-rose-500",
  }
];

/* ─── Section ─────────────────────────────────────────────────── */
export function Reviews() {
  const plugin = useRef(Autoplay({ delay: 4500, stopOnInteraction: true }));
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      id="opiniones"
      ref={sectionRef}
      className="relative bg-muted/40 py-16 sm:py-24 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Opiniones reales
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Lo que dicen nuestros{" "}
            <span className="text-primary">pacientes</span>
          </h2>

          {/* Overall Google rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
            className="mt-6 inline-flex items-center gap-4 rounded-2xl bg-background px-6 py-3.5 shadow-sm ring-1 ring-black/5"
          >
            <GoogleLogo className="h-7 w-7 shrink-0" />
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-foreground">
                {OVERALL_RATING.toFixed(1)}
              </span>
              <Stars rating={5} size="md" />
            </div>
            <div className="border-l border-border pl-4 text-left">
              <p className="text-sm font-semibold text-foreground">
                {TOTAL_REVIEWS}+ reseñas
              </p>
              <p className="text-[11px] text-muted-foreground">
                Verificadas en Google
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="mx-auto max-w-6xl"
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="-ml-4 pb-2">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.07,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group h-full rounded-3xl bg-background p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow flex flex-col"
                  >
                    {/* Quote icon */}
                    <Quote className="mb-4 h-7 w-7 text-primary/25 shrink-0" />

                    {/* Review text */}
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Stars */}
                    <div className="mt-4">
                      <Stars rating={review.rating} size="sm" />
                    </div>

                    {/* Divider */}
                    <div className="my-4 border-t border-border" />

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${review.color} text-white text-xs font-bold`}
                        >
                          {review.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground leading-tight">
                            {review.name}
                          </p>
                          <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                            {review.badge}
                          </p>
                        </div>
                      </div>

                      {/* Google verified badge */}
                      <div className="flex flex-col items-end shrink-0 gap-1">
                        <GoogleLogo className="h-4 w-4" />
                        <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden md:block">
              <CarouselPrevious className="-left-5 border-none bg-background shadow-md hover:bg-primary/5 hover:text-primary transition-colors" />
              <CarouselNext className="-right-5 border-none bg-background shadow-md hover:bg-primary/5 hover:text-primary transition-colors" />
            </div>
          </Carousel>
        </motion.div>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-muted-foreground shadow-sm hover:border-primary/40 hover:text-primary transition-colors"
          >
            <GoogleLogo className="h-4 w-4" />
            Ver todas las reseñas en Google
          </a>
         
        </motion.div>

      </div>
    </section>
  );
}
