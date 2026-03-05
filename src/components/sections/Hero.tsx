"use client";

import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";

const WA_LINK = "https://api.whatsapp.com/send/?phone=%2B543412502044&text&type=phone_number&app_absent=0&utm_source=ig";
const PHONE_LINK = "tel:08103211083";

const quickLinks = [
  {
    icon: <Calendar className="h-5 w-5" />,
    label: "Reservar Turno",
    href: WA_LINK,
    external: true,
    accent: true,
  },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-28 pt-20">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-62 -right-32 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl" style={{ background: "#7350F2" }} />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl" style={{ background: "#2B1966" }} />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center gap-6">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold ring-1"
            style={{ background: "#F4F5F7", color: "#7350F2", "--tw-ring-color": "#7350F233" } as React.CSSProperties}
          >
            <span className="flex h-2 w-2 rounded-full animate-pulse" style={{ background: "#7350F2" }} />
            Kinesiología y Clínica de Salud Integral
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-normal sm:text-6xl md:text-7xl"
          >
            <span style={{ color: "#2B1966" }}>Mōtus Clínica</span>{" "}
            <span
              className="relative inline-block"
              style={{ color: "#7350F2" }}
            >
              Integral
              <span
                className="absolute -bottom-1 left-0 h-1 w-full rounded-full opacity-40"
                style={{ background: "#7350F2" }}
              />
            </span>
          </motion.h1>

          {/* Handle + subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-lg font-semibold text-primary">Cuidado Personalizado y Seguimiento Humano</span>
            <p className="max-w-xl text-lg text-muted-foreground mt-2">
              Un espacio enfocado en el cuidado personalizado, el bienestar físico y la prevención. Nuestro equipo te acompaña en la mejora de tu salud general en instalaciones de excelente calidad.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-2"
          >
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-all hover:scale-105 hover:shadow-md"
                style={
                  link.accent
                    ? { background: "#7350F2", color: "#fff" }
                    : (link as { whatsapp?: boolean }).whatsapp
                    ? { background: "#25D366", color: "#fff" }
                    : { background: "#fff", color: "#7350F2", border: "1.5px solid #E2E8F0" }
                }
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
