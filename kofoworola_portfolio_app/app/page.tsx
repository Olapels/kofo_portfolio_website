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
          <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content', animationDuration: '35s' }}>
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
      <section className="py-16 sm:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-slate-200/90 mb-8">
            Professional Footprints
          </p>
          <div className="flex animate-marquee whitespace-nowrap py-6" style={{ width: 'max-content' }}>
            {[...profile.experience, ...profile.experience].map((exp, index) => (
              <div
                key={`${exp.company}-${index}`}
                className="flex items-center mx-4 sm:mx-6 md:mx-8 lg:mx-10 min-w-[520px] sm:min-w-[600px] md:min-w-[700px] lg:min-w-[800px] py-2"
              >
                <div className="flex items-center w-full">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 mr-8 sm:mr-10 md:mr-12 lg:mr-14">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain"
                    />
                  </div>
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white whitespace-nowrap px-8">
                    {exp.company}
                  </span>
                </div>
                <span className="text-amber-300 text-lg sm:text-xl md:text-2xl lg:text-3xl mx-8">|</span>
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
