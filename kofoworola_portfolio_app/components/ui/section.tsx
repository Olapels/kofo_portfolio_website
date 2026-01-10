type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-2xl font-semibold mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}
