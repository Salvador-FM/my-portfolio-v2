"use client";

import { SlideUp } from "@/components/motion/slide-up";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  {
    title: "[Título del artículo 1]",
    date: "15 Mar 2024",
    category: "Arquitectura",
    summary:
      "[Resumen breve del artículo. Describe el tema principal en 1-2 oraciones.]",
    readTime: "5 min",
    slug: "[articulo-1]",
  },
  {
    title: "[Título del artículo 2]",
    date: "28 Feb 2024",
    category: "Frontend",
    summary:
      "[Resumen breve del artículo. Describe el tema principal en 1-2 oraciones.]",
    readTime: "8 min",
    slug: "[articulo-2]",
  },
  {
    title: "[Título del artículo 3]",
    date: "10 Feb 2024",
    category: "DevOps",
    summary:
      "[Resumen breve del artículo. Describe el tema principal en 1-2 oraciones.]",
    readTime: "6 min",
    slug: "[articulo-3]",
  },
];

export function Blog() {
  return (
    <section id="blog" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SlideUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Escritura técnica
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Blog técnico
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Artículos sobre arquitectura, desarrollo y buenas prácticas en
            ingeniería de software.
          </p>
        </SlideUp>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <a
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-muted-foreground/20"
              >
                <div className="mb-4 flex items-center justify-between">
                  <Badge variant="secondary" className="font-normal">
                    {post.category}
                  </Badge>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.summary}
                </p>

                <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
