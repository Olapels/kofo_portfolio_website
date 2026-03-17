import Section from "@/components/ui/section";
import { profile } from "@/components/data/profile";

export default function Contact() {
  return (
    <Section title="Contact" id="contact">
      <div className="w-full">
        <p className="text-lg font-semibold text-white">
          Let&apos;s start a conversation.
        </p>
        <p className="mt-4 text-sm text-slate-200/80">
          I&apos;m available for advisory, consulting, and impact-focused projects.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            href={`tel:${profile.contact.phone}`}
          >
            <span className="text-xs uppercase tracking-wide text-amber-200/80">
              Phone
            </span>
            <span className="mt-2 text-lg font-semibold text-white">
              {profile.contact.phone}
            </span>
          </a>

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
