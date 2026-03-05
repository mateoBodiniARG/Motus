"use client";

import { motion } from "framer-motion";
import { Stethoscope, Apple, Activity, Hand, Crosshair, Dumbbell, Bone, UserCheck, Zap } from "lucide-react";

const services = [
  { icon: <Apple className="h-6 w-6" />, name: "Nutrición", desc: "Planes alimentarios integrales para optimizar tu salud, rendimiento deportivo y bienestar." },
  { icon: <Activity className="h-6 w-6" />, name: "Osteopatía", desc: "Terapia holística manual para restaurar el equilibrio biomecánico y funcional del cuerpo." },
  { icon: <Hand className="h-6 w-6" />, name: "Terapia Manual", desc: "Tratamiento directo sobre las articulaciones y tejidos blandos para reducir dolor." },
  { icon: <Crosshair className="h-6 w-6" />, name: "Punción Seca y Acupuntura", desc: "Tratamiento mínimamente invasivo enfocado en los puntos gatillo miofasciales." },
  { icon: <Dumbbell className="h-6 w-6" />, name: "Entrenamiento Personalizado", desc: "Rutinas específicas adaptadas a tus objetivos de rehabilitación, fuerza y resistencia." },
  { icon: <Bone className="h-6 w-6" />, name: "Quiropraxia", desc: "Ajustes vertebrales y articulares para optimizar la función de tu sistema nervioso central." },
  { icon: <UserCheck className="h-6 w-6" />, name: "RPG", desc: "Reeducación Postural Global para corregir alteraciones biomecánicas y posturales." },
  { icon: <Zap className="h-6 w-6" />, name: "MEP", desc: "Microelectrólisis Percutánea para la regeneración focalizada de tendinopatías y músculos." },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Services() {
  return (
    <section id="servicios" className="py-20 relative">
      {/* Section bg accent */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, #7350F2 0%, transparent 60%)" }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">

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
            <Stethoscope className="h-3.5 w-3.5" />
            Especialidades
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Nuestros Servicios
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Contamos con un equipo multidisciplinario altamente capacitado para tu cuidado integral.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.name}
              variants={cardVariants}
              className="group flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-default"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm transition-transform group-hover:scale-105"
                style={{ background: "linear-gradient(135deg,#7350F2,#2B1966)" }}
              >
                {svc.icon}
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">{svc.name}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
