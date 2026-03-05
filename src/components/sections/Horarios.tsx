"use client";

import { motion } from "framer-motion";
import { Clock, Phone, Sun, Coffee } from "lucide-react";

const scheduleItems = [
  {
    icon: <Sun className="h-5 w-5" />,
    day: "Lunes a Viernes",
    times: ["9:00 – 12:30", "16:30 – 20:00"],
    badge: "Doble turno",
  },
  {
    icon: <Coffee className="h-5 w-5" />,
    day: "Sábados",
    times: ["9:30 – 12:30"],
    badge: "Turno mañana",
  },
];

export function Horarios() {
  return (
    <section id="horarios" className="py-20">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div
            className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{ background: "#F4F5F7", color: "#7350F2" }}
          >
            <Clock className="h-3.5 w-3.5" />
            Atención
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Nuestros Horarios
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Estamos aquí para acompañarte en tu proceso de recuperación y bienestar.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          {scheduleItems.map((item, i) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              {/* Accent corner */}
              <div
                className="absolute -top-6 -right-6 h-20 w-20 rounded-full opacity-15"
                style={{ background: "#7350F2" }}
              />

              <div className="relative z-10 flex items-start justify-between mb-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow"
                  style={{ background: "linear-gradient(135deg,#7350F2,#2B1966)" }}
                >
                  {item.icon}
                </div>
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  style={{ background: "#F4F5F7", color: "#7350F2" }}
                >
                  {item.badge}
                </span>
              </div>

              <p className="relative z-10 text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                {item.day}
              </p>
              <div className="relative z-10 space-y-1">
                {item.times.map((t) => (
                  <p key={t} className="text-2xl font-bold text-foreground">
                    {t}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phone CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="mt-10 flex flex-col items-center gap-2 text-center"
        >
          <p className="text-sm text-muted-foreground">¿Necesitás consultar horarios? Llamanos</p>
          <a
            href="tel:08103211083"
            className="flex items-center gap-2 rounded-full px-6 py-2.5 text-base font-semibold text-white shadow-md transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#7350F2,#2B1966)" }}
          >
            <Phone className="h-4 w-4" />
            0810-321-1083
          </a>
        </motion.div>

      </div>
    </section>
  );
}
