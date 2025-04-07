"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="absolute bottom-0 flex flex-row items-center justify-around w-full h-1/12 border-t-2 border-t-gray-300">
      <Link
        href="/main"
        className={`flex-1/3 h-full text-center border-t-2  ${
          pathname === "/main" && "border-t-green-600"
        }`}
      >
        메인
      </Link>
      <Link
        href="/undefined"
        className={`flex-1/3 h-full text-center border-t-2 ${
          pathname === "/undefined" && "border-t-green-600"
        }`}
      >
        안정함
      </Link>
      <Link
        href="/mypage"
        className={`flex-1/3 h-full text-center border-t-2 ${
          pathname === "/mypage" && "border-t-green-600"
        }`}
      >
        마이페이지
      </Link>
    </div>
  );
}
