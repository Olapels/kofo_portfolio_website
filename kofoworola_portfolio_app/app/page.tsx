import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Articles from "@/components/sections/articles";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Contact from "@/components/sections/contact";
import { profile } from "@/components/data/profile";

export default function Page() {
  return (
    <main className="flex flex-col">
      <Hero />
      
      {/* Flowing expertise bar */}
      <section className="py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...profile.expertise, ...profile.expertise].map((item, index) => (
              <div key={`${item.title}-${index}`} className="flex items-center gap-3 mx-8">
                <span className="material-symbols-outlined text-2xl text-amber-300">
                  {item.icon}
                </span>
                <span className="text-lg font-medium text-white">
                  {item.title}
                </span>
                <span className="text-amber-300 mx-4">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <About />
      <Skills />
      
      {/* Flowing companies bar */}
      <section className="py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xl text-center font-semibold text-slate-200/80 mb-6">
            some of the companies i have worked for include
          </p>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...profile.experience, ...profile.experience].map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className="flex items-center gap-6 mx-20 min-w-[420px]"
              >
                <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <span className="text-3xl font-semibold text-white">
                  {exp.company}
                </span>
                <span className="text-amber-300 mx-8 text-4xl">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Experience />
      <Articles />
      <Education />
      <Contact />
    </main>
  );
}
