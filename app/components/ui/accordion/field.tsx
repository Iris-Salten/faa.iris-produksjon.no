export default function AccordionField({
  title,
  value,

  corrections,
}: {
  title: string;
  value: string | null | undefined | number | React.ReactNode;
  corrections?: {
    key: string;
    value: string | number | undefined | React.ReactNode;
  }[];
}) {
  return (
    <label className="flex gap-3 flex-col">
      <span className="flex flex-col">
        <p className="text-sm">{title}</p>
        <span className="p-4 border-b-[1px] border-gray-300 text-sm">
          {value}
        </span>
      </span>

      {Array.isArray(corrections) && corrections?.length > 0 && (
        <div className="flex flex-col gap-4 w-full p-4 border-[1px] border-orange-300/50 bg-orange-300/10">
          <p className="italic text-xs">Korrigert av mottak</p>
          <span className="flex flex-col gap-4">
            {corrections.map((correction, index) => (
              <div key={index} className="flex flex-col w-full">
                <p className="font-medium text-sm">{correction.key}</p>
                <span className="p-4 border-b-[1px] border-black text-sm">
                  {correction.value}
                </span>
              </div>
            ))}
          </span>
        </div>
      )}
    </label>
  );
}
