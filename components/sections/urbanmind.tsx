"use client";

import { SlideUp } from "@/components/motion/slide-up";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Brain, ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const impact = [
  { icon: Zap, value: "80%", label: "Reducción en tiempo de respuesta" },
  { icon: Shield, value: "60M+", label: "Ciudadanos potenciales" },
  { icon: BarChart3, value: "45%", label: "Mejora en gestión de incidencias" },
];

export function UrbanMind() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SlideUp>
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="secondary">Caso de estudio</Badge>
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  UrbanMind
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  Plataforma de participación ciudadana impulsada por IA
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                      Problema
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Las ciudades enfrentan desafíos en la gestión de incidencias
                      urbanas. Los ciudadanos carecen de canales efectivos para reportar
                      problemas, y los gobiernos struggle para procesar y priorizar
                      los reportes de manera eficiente.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                      Solución
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      UrbanMind conecta ciudadanos y gobierno a través de WhatsApp,
                      utilizando inteligencia artificial para clasificar, priorizar y
                      derivar reportes al departamento correspondiente, reduciendo
                      tiempos de respuesta y mejorando la gestión urbana.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                      Arquitectura
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      [Descripción de la arquitectura técnica: microservicios, APIs,
                      infraestructura, etc. Incluir diagrama si es posible.]
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Angular", "PrimeNG", "Supabase", "n8n", "OpenAI API", "ConUnBOT"].map(
                    (tech) => (
                      <Badge key={tech} variant="outline" className="font-normal">
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-8 rounded-xl border border-border bg-muted/50 p-8">
                  <Image
                    src="/dashboard_urbanmind.webp"
                    alt="Dashboard de UrbanMind - Panel de control de participación ciudadana"
                    width={600}
                    height={400}
                    className="w-full rounded-lg object-cover"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {impact.map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <p className="text-2xl font-bold text-foreground">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* <a
                  href="[url-caso-estudio]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants(), "mt-8 w-full")}
                >
                  Ver caso de estudio completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a> */}
              </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
