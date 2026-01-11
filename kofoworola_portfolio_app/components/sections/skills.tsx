import Section from "@/components/ui/section";
import { profile } from "@/components/data/profile";

export default function Skills() {
  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Expertise & Services
          </h2>
          <p className="text-lg text-gray-600">
            Practical investment and impact expertise applied across funds,
            portfolios, and institutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.expertise.map((item) => (
            <div
              key={item.title}
              className="group relative p-8 rounded-xl border border-gray-200 hover:border-yellow-400/50 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

              <div className="relative z-10 flex flex-col gap-6">
                <span className="material-symbols-outlined text-4xl text-yellow-500">
                  {item.icon}
                </span>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
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

