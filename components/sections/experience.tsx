"use client";

import { SlideUp } from "@/components/motion/slide-up";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { GraduationCap, Briefcase, Trophy, Lightbulb } from "lucide-react";

const timeline = [
  {
    year: "2025",
    title: "Ingeniero en Sistemas Computacionales",
    description:
      "Graduado del Instituto Tecnológico de La Piedad con enfoque en desarrollo full-stack, arquitectura de software y soluciones digitales escalables.",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "UrbanMind: Innovación para Ciudades Inteligentes",
    description:
      "Forme parte en el desarrollo de una plataforma de gestión ciudadana basada en IA, WhatsApp, Angular, Supabase y automatizaciones con n8n, presentada en InnovaTec 2024.",
    icon: Trophy,
  },
  {
    year: "2022",
    title: "Construyendo Soluciones Escalables",
    description:
      "Participé en proyectos enfocados en componentes reutilizables, optimización de rendimiento y arquitecturas frontend mantenibles.",
    icon: Lightbulb,
  },
  {
    year: "2021",
    title: "Primer Paso Profesional",
    description:
      "Inicié mi carrera profesional en Itelisoft, colaborando en equipos ágiles y adquiriendo experiencia en desarrollo web moderno.",
    icon: Briefcase,
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SlideUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Trayectoria
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experiencia profesional
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Mi recorrido profesional y los hitos más relevantes de mi carrera.
          </p>
        </SlideUp>

        <div className="relative mt-16">
          <div className="absolute left-0 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-px" />

          <Stagger className="space-y-12">
            {timeline.map((item, index) => (
              <StaggerItem key={item.year}>
                <div
                  className={`relative flex flex-col gap-6 sm:flex-row ${index % 2 === 0 ? "sm:flex-row-reverse" : ""
                    }`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "sm:text-left" : "sm:text-right"
                      }`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground`}
                    >
                      <item.icon className="h-3 w-3" />
                      {item.year}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-border bg-background sm:left-1/2" />

                  <div className="flex-1" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
