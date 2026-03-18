import { profile } from "@/components/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/40 dark:border-slate-800/40 bg-white/60 dark:bg-slate-950/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            {profile.name}
          </p>
          {/* <p className="text-xs text-gray-600 dark:text-slate-300">
            Built with Next.js + Tailwind · {new Date().getFullYear()}
          </p> */}
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-slate-300">
          <a
            href={profile.contact.linkedin?.url ?? "#"}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            {profile.contact.linkedin?.label ?? "LinkedIn"}
          </a>
          <span className="hidden sm:inline">·</span>
          <a
            href={`mailto:${profile.contact.email}`}
            className="hover:text-gray-900 dark:hover:text-white"
          >
            {profile.contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
