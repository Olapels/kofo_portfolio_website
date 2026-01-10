import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Education from "@/components/sections/education";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Advantage from "@/components/sections/advantage";
import Contact from "@/components/sections/contact";

export default function Page() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Advantage />
      <Contact />
    </main>
  );
}
