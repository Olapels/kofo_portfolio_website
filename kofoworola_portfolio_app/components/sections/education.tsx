import Section from "@/components/ui/section";
import { profile } from "@/components/data/profile";

export default function Education() {
  return (
    <Section title="Education" id="education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {profile.education.map((edu) => (
          <div
            key={edu.institution}
            className="glass p-8 rounded-3xl border border-white/10"
          >
            <h3 className="text-xl font-semibold text-white">
              {edu.institution}
            </h3>
            <p className="mt-3 text-base text-slate-200/80 leading-relaxed">
              {edu.qualification}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
