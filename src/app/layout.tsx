import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "폐의약품 수거 위치 찾기",
  description: "위치 기반 폐의약품 수거 위치 확인",
};

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    kakao: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="my-0 mx-auto">{children}</body>
    </html>
  );
}
