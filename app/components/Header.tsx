import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 px-4 mb-4">
      <div className="container mx-auto flex justify-between items-center border-b border-white">
        <nav>
          <Link
            href="/all-menus"
            className="text-zinc-200 hover:text-white transition-colors font-philosopher ml-2"
          >
            all menus
          </Link>
        </nav>
        <a
          href="https://venmo.com/Neel-Patel-Shah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-200 hover:text-white transition-colors px-4 py-2 font-philosopher"
        >
          donate
        </a>
      </div>
    </header>
  );
}
