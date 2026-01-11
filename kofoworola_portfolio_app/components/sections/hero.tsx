import { profile } from "@/components/data/profile";


export default function Hero() {
  return (
    <section
      id="hero"
      className="py-24 bg-white text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Image */}
        <div className="md:col-span-5">
          <div className="relative group">
            <div className="absolute -inset-4 bg-yellow-400/20 rounded-2xl blur-xl transition group-hover:bg-yellow-400/30" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/kofo.jpg"
                alt={profile.name}
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <span className="text-sm font-bold tracking-[0.25em] uppercase text-yellow-500">
            Hi There!
          </span>

          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            {profile.name}
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            {profile.introduction[0]}
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            {profile.introduction[1]}
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            {profile.introduction[2]}
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            {profile.introduction[3]}
          </p>

          <div className="grid grid-cols-2 gap-8 mt-6">
            <div className="border-l-2 border-yellow-400 pl-4">
              <p className="text-3xl font-bold"> 3 years </p>
              <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                Professional Experience
              </p>
            </div>

            <div className="border-l-2 border-yellow-400 pl-4">
              <p className="text-3xl font-bold">$100Million</p>
              <p className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                cumulative deal value supported
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

