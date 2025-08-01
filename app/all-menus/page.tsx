import Link from "next/link";

export default function AllMenus() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-lg font-semibold font-philosopher mb-8">
          all bar nicolette menus
        </h1>
        <Link
          href="/storytime"
          className="flex flex-col items-center gap-2 p-4 border-b border-white"
        >
          <h2 className="text-4xl font-semibold font-playfair">STORYTIME</h2>
        </Link>
        <Link
          href="/storytime-ii"
          className="flex flex-col items-center gap-2 p-4 border-b border-white"
        >
          <h2 className="text-4xl font-semibold font-playfair">STORYTIME</h2>
          <h6 className="text-xs font-philosopher mb-1">Chapter II</h6>
        </Link>
        <Link
          href="/cleanout"
          className="flex flex-col items-center gap-2 p-4 border-b border-white"
        >
          <h2 className="text-4xl font-semibold font-playfair">CLEANOUT</h2>
        </Link>
        <Link
          href="/send-off"
          className="flex flex-col items-center gap-2 p-4 border-b border-white"
        >
          <h2 className="text-4xl font-semibold font-cutive-mono">SEND OFF</h2>
          <p className="text-zinc-400 font-arvo">{"Today's selection"}</p>
        </Link>
      </div>
    </main>
  );
}
