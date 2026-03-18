"use client";

import { useState, useEffect } from "react";
import Section from "@/components/ui/section";
import { profile } from "@/components/data/profile";

export default function Experience() {
  const [currentIndices, setCurrentIndices] = useState([0, 1, 2]);
  const [displayedTexts, setDisplayedTexts] = useState(["", "", ""]);
  const [isTyping, setIsTyping] = useState([true, true, true]);

  // Get all bullets from all experiences
  const allBullets = profile.experience.flatMap(exp => exp.bullets);

  useEffect(() => {
    const intervals = [0, 1, 2].map((slotIndex) => {
      const index = currentIndices[slotIndex];
      if (index >= allBullets.length) return null;

      const currentBullet = allBullets[index];

      return setInterval(() => {
        setDisplayedTexts(prev => {
          const newTexts = [...prev];
          const currentText = newTexts[slotIndex];

          if (isTyping[slotIndex]) {
            if (currentText.length < currentBullet.length) {
              newTexts[slotIndex] = currentBullet.slice(0, currentText.length + 1);
            } else {
              // Finished typing, wait before clearing
              setTimeout(() => {
                setIsTyping(prev => {
                  const newTyping = [...prev];
                  newTyping[slotIndex] = false;
                  return newTyping;
                });
              }, 6000); // Increased pause time for reading
            }
          } else {
            if (currentText.length > 0) {
              newTexts[slotIndex] = currentText.slice(0, -1);
            } else {
              // Finished deleting, move to next bullet
              setCurrentIndices(prev => {
                const newIndices = [...prev];
                newIndices[slotIndex] = (newIndices[slotIndex] + 3) % allBullets.length;
                return newIndices;
              });
              setIsTyping(prev => {
                const newTyping = [...prev];
                newTyping[slotIndex] = true;
                return newTyping;
              });
            }
          }

          return newTexts;
        });
      }, isTyping[slotIndex] ? 30 : 15); // Faster typing/deleting
    });

    return () => {
      intervals.forEach(interval => interval && clearInterval(interval));
    };
  }, [currentIndices, isTyping, allBullets]);

  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Experience
        </h2>
      </div>
      <div className="w-full max-w-none">
        <div className="glass p-6 sm:p-10 md:p-16 rounded-3xl space-y-6 sm:space-y-7 md:space-y-8">
          {[0, 1, 2].map((slotIndex) => {
            const bulletIndex = currentIndices[slotIndex] % allBullets.length;
            const bullet = allBullets[bulletIndex];

            return (
              <div key={slotIndex} className="text-sm sm:text-lg md:text-2xl text-slate-200/90 leading-relaxed min-h-[80px] sm:min-h-[100px] md:min-h-[110px] flex items-start">
                <span className="text-amber-300 mr-3 sm:mr-4 text-sm sm:text-lg md:text-2xl flex-shrink-0">{'>'}</span>
                <span className="flex-1">
                  {displayedTexts[slotIndex]}
                  {isTyping[slotIndex] && displayedTexts[slotIndex].length < (bullet?.length || 0) && (
                    <span className="animate-pulse">|</span>
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}