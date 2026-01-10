import Section from "@/components/ui/section";
import { profile } from "@/components/data/profile";

export default function Skills() {
  return (
    <Section title="Skills & Competencies">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
        {profile.skills.map((skill) => (
          <li key={skill}>• {skill}</li>
        ))}
      </ul>
    </Section>
  );
}
