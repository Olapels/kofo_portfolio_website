import Section from "@/components/ui/section";
import { profile } from "@/components/data/profile";

export default function Advantage() {
  return (
    <Section title="Unique Advantage">
      <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
        {profile.advantage.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Section>
  );
}
