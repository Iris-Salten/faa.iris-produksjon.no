export default function AccordionField({
  title,
  value,
}: {
  title: string;
  value: string | null | undefined | number;
}) {
  return (
    <label className="flex flex-col">
      <p className="text-sm">{title}</p>
      <span className="p-4 border-b-[1px] border-gray-300 text-sm">
        {value || '-'}
      </span>
    </label>
  );
}
