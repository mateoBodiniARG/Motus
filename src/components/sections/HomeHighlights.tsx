"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Stethoscope, Syringe, Activity, ShoppingBag } from "lucide-react";

const highlights = [
  {
    icon: Stethoscope,
    label: "Atención Clínica",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Syringe,
    label: "Cirugías",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: Activity,
    label: "Internación",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: ShoppingBag,
    label: "Pet Shop",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export function HomeHighlights() {
  return (
    <>
      {/* Services teaser */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-10"
          >
            <p className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-3">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary inline-block" />
              Lo que ofrecemos
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              Atención integral para cada etapa de la vida de tu mascota.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {highlights.map((h) => (
              <motion.div
                key={h.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" as const },
                  },
                }}
                className="flex flex-col items-center gap-3 rounded-2xl bg-background p-5 shadow-sm ring-1 ring-black/5"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${h.bg} ${h.color}`}>
                  <h.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <span className="text-sm font-semibold text-center text-foreground">
                  {h.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/servicios">
                Ver todos los servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 md:px-6 py-14 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex flex-col items-center text-center gap-6 sm:gap-8"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                ¿Tu mascota necesita atención?
              </h2>
              <p className="text-primary-foreground/80 text-base sm:text-lg max-w-xl mx-auto">
                Estamos disponibles las 24 horas en nuestra clínica de Av. Ejército. No esperes ante una emergencia.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-8 font-semibold"
                asChild
              >
                <a href="tel:0343155000524">
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar ahora · 0343 155 000 524
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 font-semibold border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/sedes">
                  Ver nuestras sedes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
