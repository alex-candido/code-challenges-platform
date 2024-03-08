import Navbar from '@/components/layout/Navbar';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar problemPage />
      {children}
    </>
  );
}
