import BottomNavigation from "@/app/_components/bottomNavigation";

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
