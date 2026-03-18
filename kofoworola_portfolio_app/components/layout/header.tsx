"use client";

import { useState } from "react";
import { profile } from "@/components/data/profile";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Articles", href: "#articles" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/40 dark:bg-slate-950/40 border-b border-slate-200/30 dark:border-slate-800/40">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#hero"
          className="font-semibold tracking-wide text-gray-900 dark:text-white"
        >
          {profile.name.split(" ")[0]}
        </a>

        <nav className="hidden md:flex items-center gap-6 text-base font-medium text-gray-700 dark:text-slate-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative transition hover:text-gray-900 dark:hover:text-white"
            >
              <span className="absolute inset-x-0 -bottom-2 h-0.5 scale-x-0 bg-gradient-to-r from-yellow-400 to-amber-500 transition-transform group-hover:scale-x-100" />
              <span className="relative">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={profile.contact.linkedin?.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            aria-label="LinkedIn"
          >
            <span className="material-symbols-outlined text-lg">work</span>
          </a>
          <a
            href={profile.contact.medium ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            aria-label="Medium"
          >
            <span className="material-symbols-outlined text-lg">article</span>
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="md:hidden bg-slate-900/95 border-t border-slate-700/50 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-amber-300 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                <a
                  href={profile.contact.linkedin?.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-white hover:bg-slate-800 transition"
                  aria-label="LinkedIn"
                >
                  <span className="material-symbols-outlined text-lg">work</span>
                </a>
                <a
                  href={profile.contact.medium ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-white hover:bg-slate-800 transition"
                  aria-label="Medium"
                >
                  <span className="material-symbols-outlined text-lg">article</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
