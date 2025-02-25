import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-4 px-4 mb-4">
      <div className="container mx-auto flex justify-between items-center border-b border-white">
        <nav className="w-1/3">
          <Link
            href="/all-menus"
            className="text-zinc-200 hover:text-white transition-colors font-philosopher ml-2"
          >
            all menus
          </Link>
        </nav>
        <div className="w-1/3 flex justify-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Bar Nicolette"
              width={100}
              height={100}
              className="w-auto h-8"
              priority
            />
          </Link>
        </div>
        <div className="w-1/3 flex justify-end">
          <a
            href="https://venmo.com/Neel-Patel-Shah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 hover:text-white transition-colors px-4 py-2 font-philosopher"
          >
            donate
          </a>
        </div>
      </div>
    </header>
  );
}
