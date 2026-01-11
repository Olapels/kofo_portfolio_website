import Section from "@/components/ui/section";
import { profile } from "@/components/data/profile";

export default function Experience() {
  return (
    <Section title="Selected Experience">
      <div className="space-y-10">
        {profile.experience.map((exp) => (
          <div
            key={exp.company}
            className="flex gap-6 items-start"
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={exp.logo}
                alt={exp.company}
                className="h-12 w-12 object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-lg font-bold text-gray-900">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-500">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm font-semibold text-gray-700 mb-3">
                {exp.company}
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {exp.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
