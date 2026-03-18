import Section from "@/components/ui/section";
import { profile } from "@/components/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <header className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          About Me
        </h2>
      </header>
      <div className="w-full">
        <div className="glass p-6 sm:p-12 md:p-20 rounded-3xl space-y-8 sm:space-y-10 md:space-y-12">
          {profile.introduction.map((paragraph, index) => (
            <p key={index} className="text-lg sm:text-2xl md:text-4xl leading-relaxed text-slate-200/95">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
