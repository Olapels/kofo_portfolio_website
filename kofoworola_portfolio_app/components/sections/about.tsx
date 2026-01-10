import Section from "@/components/ui/section";
import { profile } from "@/components/data/profile";

export default function About() {
  return (
    <Section title="Introduction">
      <div className="space-y-4 text-gray-700 leading-relaxed">
        {profile.introduction.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
