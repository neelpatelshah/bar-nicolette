const cocktails = [
  {
    name: "Bawarij",
    ingredients: [
      "Black Strap Rum Blend",
      "Cachaça",
      "Amaro Di Angostura",
      "Allspice Dram",
      "Elemakule",
    ],
    description:
      "Named for Indian Pirates, this is a deep, rich, and strong drink that relies on the sweetness of rum from black strap molasses to not punch you in the face. Indian rum mellows the rich notes while cachaca freshens the thing up a bit. Served on a rock with cannon smoke.",
  },
  {
    name: "Centoetl",
    ingredients: [
      "Reposado Tequila",
      "Mezcal",
      "Elote Liqueur",
      "Onion",
      "Chili",
      "Lime",
    ],
    description:
      "I'm aiming for a drink that tastes like the freshest bite of elote you can get your hands on, with the Aztec god of maize smiling down on you. Spicy margs are over, embrace the street corn.",
  },
  {
    name: "Sisyphus, Kinged",
    ingredients: [
      "Olive Leaf Gin",
      "Mediterranean Olive Oil",
      "Cap Corse Blanc",
      "Caper Brine",
      "Rizzo Bitters",
      "Feta",
    ],
    description:
      "Rich, smooth, decadent, and powerful, this is a regaled up martini with the same bones. But all the same part of my impossible struggle to make Nicole a martini she will actually like.",
  },
  {
    name: "Alia",
    ingredients: [
      "Sotol",
      "Suze",
      "Blanc Vermouth",
      "Dry Gin",
      "Lindsay Bitters",
    ],
    description:
      "This unnaturally colored white Negroni take tastes like a faceful of dirt and earth, but in a good way I swear. Named for the psycho psychic Atreides freak birthed from the Water of Life, this definitely has the color of something that could be godly worm piss",
  },
  {
    name: "Elio",
    ingredients: [
      "Beachbreeze Rum",
      "Navy Strength Jamaican Rum",
      "Creme de Banane",
      "Dola Dira",
      "Elemakule",
      "Angostura",
      "Lime",
    ],
    description:
      "Maybe the easiest to drink on the menu, but much stronger than you'd think, this summery tiki adjacent drink has a dash of Italian bitter in a stemmed glass to remind us all of that one summer we got absolutely jerked around and played before we were ready for it.",
  },
  {
    name: "Violet",
    ingredients: [
      "Plymouth Gin",
      "Grapefruit",
      "Lemon",
      "Orange Bitters",
      "Peychaud's",
      "Orange Blossom Water",
      "Milk Punched",
    ],
    description:
      "A floral, effervescent delight that looks like water on first glance. It is truly Incredible (get it) how smooth and clean this is, while being sweet and a little indulgent, all while being virtually invisible.",
  },
  {
    name: "Slim Shady",
    ingredients: [
      "Jaggery",
      "Ginger",
      "Lime",
      "Rose",
      "Cognac",
      "Chaat Masala",
    ],
    description:
      "Sugarcane juice kicked up several notches. An easy sipper with a combination of flavors I would bet you haven't come across. Named for how similar the Gujarati name for sugarcane sounds to Mr Mathers alias. Non-alcoholic available.",
  },
  {
    name: "Galway Girl",
    ingredients: [
      "Irish Whiskey",
      "Cold Brew",
      "Amaro Sfumato",
      "Maraschino Liqueur",
      "Chocolate Bitters",
      "Cardamom Cream",
    ],
    description:
      'It\'s really an Irish Coffee with a few bells and whistles. Almost like you took her by the hand and said "Baby, I just want to dance"',
  },
];

export default function Storytime() {
  return (
    <main className="container mx-auto px-4 w-full pb-8">
      <header className="mb-12 text-center">
        <h6 className="text-sm font-philosopher mb-1">
          bar nicolette presents
        </h6>
        <h1 className="text-4xl mb-2 font-playfair">STORYTIME</h1>
        <h6 className="text-xs font-philosopher mb-1">Chapter II</h6>
      </header>

      <div className="w-full flex flex-col justify-center items-center gap-4">
        {cocktails.map((cocktail) => (
          <div key={cocktail.name} className="w-full md:w-1/2 pb-4 border-b">
            <h2 className="text-xl font-semibold mb-2 font-macondo">
              {cocktail.name}
            </h2>
            <div className="text-zinc-400 mb-3 font-arvo text-sm">
              {cocktail.ingredients.join(" • ")}
            </div>
            <p className="text-zinc-300 font-philosopher text-sm">
              {cocktail.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
