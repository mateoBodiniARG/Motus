"use client";

import { motion } from "framer-motion";
import { ChevronDown, Shirt, FileText, Clock } from "lucide-react";
import { useState } from "react";

type IndicacionItem = {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: string | string[];
  note?: string;
};

const indicaciones: IndicacionItem[] = [
  {
    id: "ropa",
    icon: <Shirt className="h-5 w-5" />,
    title: "Vestimenta Adecuada",
    content: [
      "Te recomendamos venir con ropa cómoda y deportiva para facilitar la evaluación y los ejercicios.",
      "Si tu lesión es en rodilla o pierna, es ideal traer pantalón corto.",
      "Para lesiones de hombro, sugerimos traer una musculosa o prenda holgada.",
    ],
    note: "Contamos con vestuarios por si necesitás cambiarte al llegar a la clínica.",
  },
  {
    id: "estudios",
    icon: <FileText className="h-5 w-5" />,
    title: "Estudios Previos",
    content: [
      "Recordá traer cualquier estudio de imagen reciente (radiografías, resonancias magnéticas, ecografías).",
      "Si tenés derivación médica o pedido de kinesiología, traelo impreso o en formato digital.",
    ],
    note: "Revisaremos todos tus estudios en la primera sesión para planificar un tratamiento adecuado.",
  },
  {
    id: "puntualidad",
    icon: <Clock className="h-5 w-5" />,
    title: "Turnos y Puntualidad",
    content: [
      "Te pedimos llegar 10 minutos antes de tu primer turno para completar la ficha clínica.",
      "Si no podés asistir, avisanos con al menos 24hs de anticipación para reprogramar tu lugar.",
    ],
    note: "Nos esforzamos por respetar los horarios para brindar una atención de calidad y sin esperas.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: IndicacionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isList = Array.isArray(item.content);

  return (
    <div className="overflow-hidden rounded-2xl bg-white border border-border shadow-sm transition-shadow hover:shadow-md">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl text-white flex-shrink-0"
            style={{ background: "linear-gradient(135deg,#7350F2,#2B1966)" }}
          >
            {item.icon}
          </div>
          <span className="font-semibold text-foreground text-base">{item.title}</span>
        </div>
        <ChevronDown
          className="h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: isOpen ? (isList ? "600px" : "200px") : "0px" }}
      >
        <div className="px-6 pb-6 border-t border-border pt-4 space-y-2">
          {isList ? (
            <>
              <ul className="space-y-3">
                {(item.content as string[]).map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <span
                      className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ background: "#7350F2" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
              {item.note && (
                <p
                  className="mt-4 text-sm font-semibold pt-3 border-t border-border"
                  style={{ color: "#7350F2" }}
                >
                  {item.note}
                </p>
              )}
            </>
          ) : (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.content as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function Indicaciones() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="indicaciones" className="py-20">
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
            Guías para pacientes
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Indicaciones
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Preparate antes de tu visita. Seguí estas guías para que todo salga perfecto.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {indicaciones.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <AccordionItem
                item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
