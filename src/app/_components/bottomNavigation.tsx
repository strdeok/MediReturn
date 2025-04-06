import Link from "next/link";

export default function BottomNavigation() {
  return (
    <div className="absolute bottom-0 flex flex-row items-center justify-around w-full h-1/12 border-t-2 border-t-gray-300">
      <Link href="/main" className="flex-1/3 h-16 text-center">
        메인
      </Link>
      <Link href="/undefined" className="flex-1/3 h-16  text-center">
        안정함
      </Link>
      <Link href="/mypage" className="flex-1/3 h-16 text-center">
        마이페이지
      </Link>
    </div>
  );
}
