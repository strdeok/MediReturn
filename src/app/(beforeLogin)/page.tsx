import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-4 ">
      <Link
        className="w-72 py-3 rounded-xl text-center text-white bg-[#A9BF04]"
        href="/main"
      >
        로그인
      </Link>
    </div>
  );
}
