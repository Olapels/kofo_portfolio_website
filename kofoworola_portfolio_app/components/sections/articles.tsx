import Image from "next/image";
import Section from "@/components/ui/section";
import { profile } from "@/components/data/profile";

export default function Articles() {
  if (!profile.articles || profile.articles.length === 0) {
    return null;
  }

  return (
    <Section title="Articles & Insights" id="articles">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {profile.articles.map((article) => (
          <a
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass p-8 rounded-3xl overflow-hidden transition hover:scale-[1.02]"
          >
            <div className="relative mb-6 overflow-hidden rounded-2xl">
              <Image
                src={article.thumbnail}
                alt={article.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-widest text-amber-200/80">
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
                <span className="material-symbols-outlined text-base text-amber-300">
                  arrow_outward
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white group-hover:text-amber-200 transition">
                {article.title}
              </h3>

              <p className="text-base text-slate-200/80 leading-relaxed">
                {article.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}