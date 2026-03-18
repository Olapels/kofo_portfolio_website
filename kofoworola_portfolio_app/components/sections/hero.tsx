"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { profile } from "@/components/data/profile";

export default function Hero() {
  const titles = [
    "Impact Finance",
    "Investment Management",
    "Capital Mobilization ",
    "Transactions Advisory",
    "Fund Structuring"
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (isTyping) {
      if (displayedText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 100); // Type speed
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before switching
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause after typing
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Delete speed
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, switch to next title
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentTitleIndex, titles]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 pb-32"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/10 via-transparent to-black/40" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="lg:w-5/12 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight text-white">
              {profile.name}
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl font-bold tracking-wide text-amber-300 min-h-[60px] flex items-center">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="relative lg:w-7/12 w-full max-w-lg lg:max-w-none">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_60px_90px_-40px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/kofo.jpg"
              alt={profile.name}
              width={20000}
              height={8000}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute -top-12 -left-12 h-52 w-52 rounded-full bg-indigo-400/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

