import Section from "@/components/ui/section";
import { profile } from "@/components/data/profile";

export default function Contact() {
  return (
    <Section title="Let's Connect" id="contact">
      <div className="w-full">

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            href={`mailto:${profile.contact.email}`}
          >
            <span className="text-xs uppercase tracking-wide text-amber-200/80">
              Email
            </span>
            <span className="mt-2 text-lg font-semibold text-white">
              {profile.contact.email}
            </span>
          </a>

          <a
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            href={profile.contact.linkedin?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-xs uppercase tracking-wide text-amber-200/80">
              LinkedIn
            </span>
            <span className="mt-2 text-lg font-semibold text-white">
              {profile.contact.linkedin?.label}
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
}
