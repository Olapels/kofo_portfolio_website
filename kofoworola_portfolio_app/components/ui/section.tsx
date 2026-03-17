type SectionProps = {
  title: string;
  children: React.ReactNode;
  id?: string;
};

export default function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id} className="py-24 max-w-5xl mx-auto px-6">
      <header className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}
