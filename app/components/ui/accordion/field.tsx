export default function AccordionField({
  title,
  value,
  endContent,
}: {
  title: string;
  value: string | null | undefined | number | React.ReactNode;
  endContent?: React.ReactNode;
}) {
  return (
    <label className="flex gap-3 flex-col">
      <span className="flex flex-col">
        <p className="text-sm">{title}</p>
        <span className="p-4 border-b-[1px] border-gray-300 text-sm">
          {value}
        </span>
      </span>
      {endContent}
    </label>
  );
}
