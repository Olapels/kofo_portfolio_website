import Section from "@/components/ui/section";
import { profile } from "@/components/data/profile";

export default function Contact() {
  return (
    <Section title="Contact">
      <div className="space-y-2 text-gray-700">
        <p>{profile.contact.phone}</p>
        <p>{profile.contact.email}</p>
      </div>
    </Section>
  );
}
