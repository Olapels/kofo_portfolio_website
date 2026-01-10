import Section from "@/components/ui/section";
import { profile } from "@/components/data/profile";

export default function Education() {
  return (
    <Section title="Education">
      <div className="space-y-6">
        {profile.education.map((edu) => (
          <div key={edu.institution}>
            <p className="font-medium">
              {edu.institution} · {edu.year}
            </p>
            <p className="text-gray-600">
              {edu.qualification}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
