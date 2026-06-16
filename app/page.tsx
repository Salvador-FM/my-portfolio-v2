import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Technologies } from "@/components/sections/technologies";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { UrbanMind } from "@/components/sections/urbanmind";
import { Blog } from "@/components/sections/blog";
import { Contact, Footer } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Technologies />
        <Experience />
        <Projects />
        <UrbanMind />
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
