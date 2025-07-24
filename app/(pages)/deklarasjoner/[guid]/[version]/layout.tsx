interface LayoutProps {
  history: React.ReactNode;
  children: React.ReactNode;
}

export default function Layout({ history, children }: LayoutProps) {
  return (
    <>
      {history}

      {children}
    </>
  );
}
