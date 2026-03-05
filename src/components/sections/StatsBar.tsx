"use client";

import { motion } from "framer-motion";
import { HeartPulse, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "+20",
    label: "Años de experiencia",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Users,
    value: "+5.000",
    label: "Pacientes atendidos",
    color: "text-sky-500",
    bg: "bg-sky-50",
  },
  {
    icon: HeartPulse,
    value: "2",
    label: "Sedes en Paraná",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Atención de urgencias",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
];

export function StatsBar() {
  return (
    <section className="bg-background border-y">
      <div className="container mx-auto px-4 md:px-6 py-10 sm:py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" as const },
                },
              }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bg} ${stat.color}`}
              >
                <stat.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div>
                <p className={`text-3xl font-black ${stat.color} leading-none`}>
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
