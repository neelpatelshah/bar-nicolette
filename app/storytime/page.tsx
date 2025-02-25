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
    name: "Sisyphus",
    ingredients: [
      "Olive Leaf Gin",
      "Cap Corse Blanc",
      "Half Sour Brine",
      "Celery",
      "Herbs",
      "Feta",
    ],
    description:
      "The cleanest dirty martini you can imagine. Like how Challengers has zero actual sex scenes in it. This drink is named for my eternal struggle to make a martini Nicole actually likes, always progressing but never reaching the summit.",
  },
  {
    name: "Jordan Belfort",
    ingredients: [
      "Rye",
      "Black Currant",
      "Vermouth",
      "Lemon",
      "Bitters",
      "Ale",
      "Milked",
      "Punched",
      '"Cocaine"',
    ],
    description:
      "This is a New York Sour turned into a drink for Hamptons douchebags at the track, kept stiff with beer from Montauk and made fancy with a milk clarification. Do a line and take a sip, you earned it.",
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
      "Sugarcane juice kicked up several notches. An easy sipper with a combination of flavors I would bet you haven't come across. Non-alcoholic available.",
  },
  {
    name: "Emily in Hanoi",
    ingredients: [
      "Cold Brew",
      "Lemon",
      "Coconut Milk",
      "Cardamom",
      "Chocolate Rum",
    ],
    description:
      "A milkshake frappe whatever the fuck for your inner white girl. A perversion of Vietnamese coffee whipped up with aquafaba to be a creamy, frothy treat. Non-alcoholic available.",
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
      </header>

      <div className="w-full flex flex-col justify-center items-center gap-8">
        {cocktails.map((cocktail) => (
          <div key={cocktail.name} className="w-full md:w-1/2">
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
