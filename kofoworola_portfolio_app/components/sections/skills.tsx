import { profile } from "@/components/data/profile";

export default function Skills() {
  return (
    <section
      id="expertise"
      className="py-32 bg-gradient-to-b from-white/5 via-white/0 to-black/0"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Areas of expertise
          </h2>
          <p className="mt-6 text-xl text-slate-200/80">
            Deep experience across impact investing, fund operations, and ESG
            strategy.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 justify-center">
          {profile.expertise.map((item) => (
            <div
              key={item.title}
              className="group glass relative p-10 rounded-3xl overflow-hidden min-w-[300px] flex-1"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/20 via-indigo-400/20 to-sky-400/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-5">
                  <span className="material-symbols-outlined text-4xl text-amber-300">
                    {item.icon}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base text-slate-200/85 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

