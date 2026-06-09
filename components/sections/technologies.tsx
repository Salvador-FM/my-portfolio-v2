"use client";

import { SlideUp } from "@/components/motion/slide-up";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Wrench } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["Angular", "React", "Next.js", "TypeScript"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["NestJS", "Node.js", "Java"],
  },
  {
    title: "Bases de datos",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    skills: ["Docker", "Git", "Linux"],
  },
];

export function Technologies() {
  return (
    <section id="tecnologias" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SlideUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Stack tecnológico
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tecnologías principales
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Herramientas y tecnologías con las que trabajo día a día para construir
            soluciones robustas y escalables.
          </p>
        </SlideUp>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-muted-foreground/20">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <category.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
