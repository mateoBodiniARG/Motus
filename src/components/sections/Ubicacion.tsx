"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink, Navigation } from "lucide-react";

const MAPS_URL = "https://maps.app.goo.gl/4Zhndoz1jUcRNDRdA";

export function Ubicacion() {
  return (
    <section id="ubicacion" className="py-20">
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
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
            <MapPin className="h-3.5 w-3.5" />
            Dónde estamos
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Nuestra Ubicación
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-center">

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white p-8 shadow-sm border border-border"
          >
            <div
              className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md"
              style={{ background: "linear-gradient(135deg,#7350F2,#2B1966)" }}
            >
              <MapPin className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-foreground mb-1">
              Mōtus Clínica Integral
            </h3>
            <p
              className="mb-4 font-semibold text-sm"
              style={{ color: "#7350F2" }}
            >
              Kinesiología y Salud
            </p>
            <address className="not-italic text-muted-foreground text-base space-y-1 mb-6">
              <p className="font-semibold text-foreground text-lg">Brown 2622</p>
              <p>2000 Rosario, Santa Fe</p>
            </address>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 px-5 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg,#7350F2,#2B1966)" }}
              >
                <Navigation className="h-4 w-4" />
                Cómo llegar
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border py-2.5 px-5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                Ver en Maps
              </a>
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl shadow-sm border border-border"
            style={{ minHeight: "320px" }}
          >
            <iframe
              title="Mōtus Clínica Integral en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.67177947328!2d-60.656701999999996!3d-32.933268999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7aba7ee31aa03%3A0x3a5919478a561497!2sM%C5%8Dtus%20Clinica%20Integral!5e0!3m2!1ses-419!2sar!4v1772748840722!5m2!1ses-419!2sar"
              width="100%"
              height="340"
              className="w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
