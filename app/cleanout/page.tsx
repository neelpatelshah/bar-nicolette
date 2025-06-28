export default function Storytime() {
  return (
    <main className="container mx-auto px-4 w-full pb-8">
      <header className="mb-12 text-center">
        <h6 className="text-sm font-philosopher mb-1">
          bar nicolette presents
        </h6>
        <h1 className="text-4xl mb-2 font-playfair">CLEANOUT</h1>
      </header>

      <div className="w-full flex flex-col justify-center items-center gap-4">
        <p className="text-zinc-300 font-philosopher text-sm px-4">
          Pick a vibe or two, a couple qualities, and tell me how strong you
          want it to be and I will try to make you something fun.
        </p>
        <h2 className="text-xl font-semibold font-macondo">Vibe</h2>
        <div className="text-zinc-400 mb-3 font-arvo text-sm">
          Floral, plums, mace, jasmine tea, nutty, fruity, bitter, herbal,
          tropical.
        </div>
        <h2 className="text-xl font-semibold font-macondo">Qualities</h2>
        <div className="text-zinc-400 mb-3 font-arvo text-sm">
          Sweet, dry, juicy, refreshing
        </div>
        <h2 className="text-xl font-semibold font-macondo">Strength</h2>
        <div className="text-zinc-400 mb-3 font-arvo text-sm text-center">
          Basically do you want a glass of booze, something normal, or something
          light.
        </div>
      </div>
    </main>
  );
}
