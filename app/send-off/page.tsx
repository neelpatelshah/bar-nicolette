const cocktails = [
  {
    name: "Here's looking at you, kid.",
    character: "Rick Blaine",
    ingredients: [
      "Mace-infused Tequila",
      "Grenadine",
      "Dola Dira",
      "Lime",
      "Bitters",
    ],
    description:
      "Half margarita, half herb spiced limeade, this is a breezy and refreshing sour style cocktail with a unique something-something that is hopefully more intriguing than offputting.",
  },
  {
    name: "So long, partner.",
    character: "Woody",
    ingredients: [
      "Olive Leaf Gin",
      "Japanese Rum",
      "Green Chartreuse",
      "Cap Corse Blanc",
      "Velvet Falernum",
      "Lime",
      "Rizzo Bitters",
      "Milk Punched",
    ],
    description:
      "This started as a gimlet and evolved into something refreshing, light, and complex. The milk wash rounds off the rough edges to uncover layers of mingling botanicals, spices, and fruity notes.",
  },
  {
    name: "Bye Buddy, I hope you find your dad.",
    character: "Mr. Narwhal",
    ingredients: [
      "Saffron-infused Cognac",
      "Pistachio Orgeat",
      "Yellow Chartreuse",
      "Suze",
      "Lemon",
      "Bitters",
      "Aquafaba",
    ],
    description:
      "Inspired by ras malai, an Indian dessert, this has become a velvety treat that's really a silent killer. Floral, nutty, sweet, and a little creamy, this is hopefully a pretty unique one for you not from the motherland.",
  },
  {
    name: "I gotta go see about a girl.",
    character: "Will Hunting",
    ingredients: [
      "Jasmine Green Tea-infused Gin",
      "Yellow Chartreuse",
      "Cap Corse",
      "Bitters",
      "Lemon Peel",
    ],
    description:
      "It's a martini but in my opinion, it goes down like a glass of iced tea. The tea infusion really takes the bite out of the gin, and the light honey sweetness is a nice finish.",
  },
  {
    name: "Good afternoon, good evening, and good night.",
    character: "Truman Burbank",
    ingredients: [
      "Smith & Cross Jamaican Rum",
      "Amrut Rum",
      "Blended Scotch",
      "Allspice Dram",
      "Coffee Amaro",
      "Dry Curacao",
      "Orgeat",
      "Lemon",
      "Lime",
      "Angostura Whipped Cream",
    ],
    description:
      "What started as a lightly interesting mai tai wound up being a fucked up concoction that's more like an insane dessert where you're like yeah sure I guess. For sure a fun one.",
  },
  {
    name: "I'll be back.",
    character: "Terminator",
    ingredients: [
      "Jaggery",
      "Ginger",
      "Lime",
      "Rose",
      "Cognac",
      "Chaat Masala",
    ],
    description:
      "What's turned into our house classic, its essentially a sugarcane juice with Cognac and some spice and salt and it is a wonderful, wonderful thing. You'll be seeing it (and us) again.",
  },
];

export default function Storytime() {
  return (
    <main className="container mx-auto px-4 w-full pb-8">
      <header className="mb-12 text-center">
        <h6 className="text-sm font-philosopher mb-1">
          bar nicolette presents
        </h6>
        <h1 className="text-4xl mb-2 font-cutive-mono">SEND OFF</h1>
      </header>

      <div className="w-full flex flex-col justify-center items-center gap-4">
        {cocktails.map((cocktail) => (
          <div key={cocktail.name} className="w-full md:w-1/2 pb-4 border-b">
            <div className="flex gap-4 items-center">
              <h2 className="text-xl font-semibold mb-2 font-cutive-mono">
                {cocktail.name}
              </h2>
              <h2 className="font-semibold mb-2 font-cutive-mono">
                [{cocktail.character.toUpperCase()}]
              </h2>
            </div>
            <div className="text-zinc-400 mb-3 font-cutive-mono text-sm">
              {cocktail.ingredients.join(" • ")}
            </div>
            <p className="text-zinc-300 font-cutive-mono text-sm">
              {cocktail.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
