"use client";

import { motion } from "motion/react";
import { SlideUp } from "@/components/motion/slide-up";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    title: "ClearBank — Digital Banking Platform",
    description:
      "Full-stack digital banking platform built with microservices architecture. Features JWT-secured API Gateway, real-time balance management, inter-service communication via OpenFeign, and automated email notifications. Fully containerized with Docker Compose.",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Redis", "JWT"],
    github: "https://github.com/Salvador-FM/clearbank-microservices",
    demo: "https://[demo-url-1]",
    image: "/projects/clear_bank.webp",
  },
  {
    title: "Sistema de gestión de inventario",
    description:
      "Sistema de gestión de inventario con analítica en tiempo real, Dashboard empresarial con control de stock, alertas automáticas de reabastecimiento, historial de movimientos y reportes exportables.",
    tech: ["React", "Next.js", "NestJS", "PostgreSQL"],
    github: "https://github.com/Salvador-FM/inventory-system",
    demo: "https://[demo-url-2]",
    image: "/projects/in-progress.webp",
  },
  {
    title: "Plataforma de e-commerce",
    description:
      "Plataforma de e-commerce completa con gestión de productos, carrito de compras, procesamiento de pagos y seguimiento de pedidos.",
    tech: ["Angular", "Node.js", "Express", "Supabase"],
    github: "https://github.com/Salvador-FM/ecommerce-platform",
    demo: "https://[demo-url-3]",
    image: "/projects/in-progress.webp",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SlideUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Portafolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proyectos destacados
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Una selección de proyectos que demuestran mis habilidades y enfoque
            técnico.
          </p>
        </SlideUp>

        <Stagger className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="font-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" })
                      )}
                    >
                      <GithubIcon className="mr-1.5 h-3.5 w-3.5" />
                      Código
                    </a>
                    {/* <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ size: "sm" }))}
                    >
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      Demo
                    </a> */}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
