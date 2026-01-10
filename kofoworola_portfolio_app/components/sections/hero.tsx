import { profile } from "@/components/data/profile";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          {profile.name}
        </h1>
        <p className="text-xl text-gray-600">
          Impact-Driven Analyst
        </p>
      </div>
    </section>
  );
}
