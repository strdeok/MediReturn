import type { Metadata } from "next";
import "./globals.css";
import BottomNavigation from "./bottomNavigation";

export const metadata: Metadata = {
  title: "폐의약품 수거 위치 찾기",
  description: "위치 기반 폐의약품 수거 위치 확인",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="w-80 my-0 mx-auto flex flex-col items-center">
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
