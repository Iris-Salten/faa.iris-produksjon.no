import moment from 'moment';

interface PointProps {
  icon?: React.ReactNode;
  title: string;
  timestamp: string;
  description: string | React.ReactNode | number;
}

export default function TimelinePoint({
  icon,
  title,
  timestamp,
  description,
}: PointProps) {
  return (
    <span className="flex w-full">
      <div className="flex flex-col gap-2 items-center w-[50px] shrink-0 grow-0">
        {icon ? (
          <span className="fill-gray-500 h-5">{icon}</span>
        ) : (
          <div className="flex w-[15px] rounded-full aspect-square bg-blue-500" />
        )}
        <div className="h-full w-[1px] bg-gray-300 flex" />
      </div>
      <div className="flex flex-col gap-1 mb-6">
        <p className="text-gray-500 text-xs">
          {moment(timestamp).add(2, 'hours').format('DD.MM.YY HH:mm')}
        </p>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-gray-800">{description}</p>
      </div>
    </span>
  );
}
