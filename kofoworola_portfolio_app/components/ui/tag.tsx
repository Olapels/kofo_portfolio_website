type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-block text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700">
      {label}
    </span>
  );
}
