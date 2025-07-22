interface Props {
  width?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function ScrollView({ width, className, children }: Props) {
  return (
    <article className={`flex w-full h-full justify-center overflow-auto`}>
      <section
        style={{ maxWidth: width + 'px' }}
        className={`flex w-full p-5 flex-col gap-4 ${className}`}
      >
        {children}
      </section>
    </article>
  );
}
