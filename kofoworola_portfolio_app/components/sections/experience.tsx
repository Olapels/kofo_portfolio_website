import Section from "@/components/ui/section";
import { profile } from "@/components/data/profile";

export default function Experience() {
  return (
    <Section title="Selected Experience">
      {profile.experience.map((exp) => (
        <ul
          key={exp.title}
          className="list-disc pl-5 space-y-3 text-gray-700"
        >
          {exp.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ))}
    </Section>
  );
}
