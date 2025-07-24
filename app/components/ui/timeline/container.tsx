interface TimelineProps {
  className?: string;
  children: React.ReactNode;
}

export default function Timeline({ className, children }: TimelineProps) {
  return (
    <div className={'flex w-full flex-col gap-2 ' + className}>{children}</div>
  );
}
