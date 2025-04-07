import BottomNavigation from "@/app/(afterLogin)/_components/bottomNavigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <BottomNavigation />
    </>
  );
}
