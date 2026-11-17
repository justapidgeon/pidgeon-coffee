export const menuItems = [
  {
    id: "espresso",
    name: "Espresso",
    price: 3.50,
    description: "A concentrated shot of pure coffee essence, thick and rich with a beautiful crema.",
    category: "Hot Coffee",
    image: "/assets/menu/Espresso/medium size medium roast espresso.png",
    allowedOptions: ["size", "bean"],
    baseSize: 2
  },
  {
    id: "americano",
    name: "Americano",
    price: 3.99,
    description: "A bold double shot of espresso tempered with hot water, preserving the rich crema and deep flavor.",
    category: "Hot Coffee",
    image: "/assets/menu/Americano/medium size medium roast americano.png",
    allowedOptions: ["size", "temperature", "bean", "sweetness", "milk"],
    milkOptions: ["None", "Whole", "Oat"],
    defaultMilk: "None",
    baseSize: 8
  },
  {
    id: "latte",
    name: "Latte",
    price: 4.95,
    description: "Espresso with silky steamed milk and a thin layer of luxurious micro-foam. The ultimate comfort drink.",
    category: "Hot Coffee",
    image: "/assets/menu/Latte/medium size medium roast latte.png",
    allowedOptions: ["size", "temperature", "bean", "milk", "sweetness"],
    baseSize: 9
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 4.75,
    description: "Equal parts espresso, steamed milk, and thick, airy foam. A perfectly balanced textured classic.",
    category: "Hot Coffee",
    image: "/assets/menu/Cappuccino/medium size medium roast cappuccino.png",
    allowedOptions: ["size", "temperature", "bean", "milk", "sweetness"],
    baseSize: 6
  },
  {
    id: "mocha",
    name: "Mocha",
    price: 5.25,
    description: "A rich blend of espresso, steamed milk, and premium chocolate syrup, topped with whipped cream.",
    category: "Hot Coffee",
    image: "/assets/menu/Mocha/medium size medium roast mocha.png",
    allowedOptions: ["size", "temperature", "bean", "milk", "sweetness"],
    baseSize: 9
  },
  {
    id: "flat-white",
    name: "Flat White",
    price: 4.50,
    description: "Ristretto espresso shots combined with micro-foamed milk for a stronger, more velvety coffee experience.",
    category: "Hot Coffee",
    image: "/assets/menu/Flat White/medium size medium roast flat white.png",
    allowedOptions: ["size", "temperature", "bean", "milk", "sweetness"],
    baseSize: 6
  },
  {
    id: "macchiato",
    name: "Macchiato",
    price: 3.75,
    description: "A classic espresso shot 'marked' with a dollop of frothy milk for a touch of sweetness.",
    category: "Hot Coffee",
    image: "/assets/menu/Macchiato/medium size medium roast macchiato.png",
    allowedOptions: ["size", "temperature", "bean", "milk", "sweetness"],
    baseSize: 3
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    price: 5.50,
    description: "Premium ceremonial grade matcha whisked with your choice of milk for an earthy, vibrant energy boost.",
    category: "Specialty",
    image: "/assets/menu/Matcha Latte/medium size matcha latte.png",
    allowedOptions: ["size", "temperature", "milk", "sweetness"],
    baseSize: 9
  }
];

export const coffeeBeans = [
  {
    id: "fito-montiel",
    name: "Fito Montiel Pacamara",
    origin: "Metapán, El Salvador",
    roasted: "CafeNor Carbon-Neutral Mill",
    roast: "Medium-Light",
    imageRoast: "Medium",
    roastLevel: 2,
    tier: "Cup of Excellence Micro-Lot",
    tagline: "Award-winning separation yielding playful citrus, juicy stone fruit and high sweetness",
    notes: ["Playful Citrus", "Juicy Stone Fruit", "High Sweetness"],
    logo: "/Coffee Bean Brands/Fito Montiel Pacamara.png",
    inStock: true,
    outOfStock: false,
    stockStatus: "Featured Micro-Lot",
    description: "This Pacamara separation from award-winning producer Fito Montiel yields playful citrus, juicy stone fruit and a high level of sweetness in the cup.\n\nThis is our second offering of the season from exporter CafeNor, a fully carbon neutral mill in the Metapan region of northern El Salvador owned by Alejandro and Rosa Maria Valiente. We’ve been purchasing coffee from the Valiente’s since 2022 and are proud to support their project in coffee innovation and sustainability. Second-generation coffee farmer Jose Arnulfo ‘Fito’ Montiel established his first parcel of land in the community of La Hondurita in 2000. Over the years, he’s established himself as a skilled producer, having placed twice in the El Salvador Cup of Excellence: 4th in 2006 and 2nd in 2007.\n\nFito grows Pacas, Bourbon and Gesha in addition to Pacamara and has an extensive catalog of processing protocols for washed, semi-washed, natural and honey methods. Since he operates his own wet mill and drying infrastructure, he’s also recently undertaken some experiments to see how modulating fermentation time impacts the flavor of his coffee.",
    links: [
      { label: "CafeNor Exporter Mill", url: "https://cafenor.com", type: "website" }
    ],
    stats: {
      acidity: 86,
      sweetness: 94,
      body: 74,
      intensity: 72,
      aroma: 92
    }
  },
  {
    id: "el-origen",
    name: "El Origen",
    origin: "Colombia",
    roasted: "Direct Farm Selected",
    roast: "Medium",
    imageRoast: "Medium",
    roastLevel: 3,
    tier: "Micro-Lot Varietal",
    tagline: "Sustainably partnered Colombian micro-lots with certified farm traceability",
    notes: ["Pink Bourbon", "Honey", "Floral"],
    logo: "/Coffee Bean Brands/El Origen.png",
    outOfStock: false,
    inStock: true,
    stockStatus: "Back in Stock",
    description: "Partnering hand-in-hand with producing families across Tolima, Huila, Caldas, and Nariño. Origen Coffee guarantees certified traceability from cultivation to cup, delivering exceptional Colombian specialty coffee with fresh, unmatched flavor profiles.",
    links: [
      { label: "@origencoffeefarms", url: "https://www.instagram.com/origencoffeefarms/", type: "instagram" },
      { label: "Da Vida Shop", url: "https://da-vida-co.myshopify.com", type: "website" }
    ],
    stats: {
      acidity: 84,
      sweetness: 92,
      body: 70,
      intensity: 66,
      aroma: 93
    }
  },
  {
    id: "boxcar",
    name: "Boxcar",
    origin: "El Salvador",
    roasted: "Boulder, Colorado",
    roast: "Medium",
    imageRoast: "Medium",
    roastLevel: 3,
    tier: "High-Altitude Artisan",
    tagline: "Boulder craft roasters sourcing direct-trade coffees on vintage Probat drums",
    notes: ["Hazelnut", "Sweet Almond", "Macadamia Nut"],
    logo: "/Coffee Bean Brands/Boxcar.png",
    description: "Founded in 2010 by Vajra and Cara Rich in Boulder, CO. Boxcar sources directly from Mauricio Salaverria at Divisadero Farms in El Salvador—paying well above Fair Trade rates—and roasts on vintage modified Probat drum roasters for an exceptionally sweet, rich cup.",
    links: [
      { label: "boxcarcoffee.com", url: "https://www.boxcarcoffee.com", type: "website" }
    ],
    stats: {
      acidity: 62,
      sweetness: 84,
      body: 82,
      intensity: 76,
      aroma: 78
    }
  },
  {
    id: "bradys",
    name: "Brady's",
    origin: "Colombia, Guatemala & Brazil",
    roasted: "Wicklow, Ireland",
    roast: "Medium",
    imageRoast: "Medium",
    roastLevel: 3,
    tier: "Celtic Heritage Blend",
    tagline: "Award-winning family artisan roastery crafted in County Wicklow, Ireland",
    notes: ["Toffee", "Caramel", "Chocolate"],
    logo: "/Coffee Bean Brands/Brady's.png",
    description: "An award-winning, family-run artisan roastery founded in 2017 in County Wicklow, Ireland. Brady's specializes in ethically sourced, small-batch roasted coffees, celebrated internationally for Irish craft, sustainability, and signature whiskey barrel-aged profiles.",
    links: [
      { label: "bradyscoffee.ie", url: "https://bradyscoffee.ie", type: "website" }
    ],
    stats: {
      acidity: 56,
      sweetness: 88,
      body: 88,
      intensity: 84,
      aroma: 86
    }
  },
  {
    id: "kaoro",
    name: "Kaoro",
    origin: "Costa Rica",
    roasted: "Kaʻū, Hawaii",
    roast: "Light",
    imageRoast: "Light",
    roastLevel: 2,
    tier: "Volcanic Light Roast",
    tagline: "Hawaiian island roasted light profile with crisp chocolate and brown sugar",
    notes: ["Chocolate", "Almond", "Brown Sugar"],
    logo: "/Coffee Bean Brands/Kaoro.png",
    description: "Roasted on the volcanic slopes of Kaʻū, Hawaii. A delicate light roast crafted to accentuate Costa Rican bean clarity, soft baker's chocolate, toasted almond slivers, and raw brown sugar.",
    stats: {
      acidity: 78,
      sweetness: 80,
      body: 58,
      intensity: 54,
      aroma: 80
    }
  },
  {
    id: "members-mark",
    name: "Member's Mark",
    origin: "Colombia",
    roasted: "Classic Roasters",
    roast: "Medium-Dark",
    imageRoast: "Dark",
    roastLevel: 4,
    tier: "Bold Dark Reserve",
    tagline: "100% Colombian Supremo Arabica delivering heavy body and toasted hazelnut",
    notes: ["Sweet Chocolate", "Hazelnut"],
    logo: "/Coffee Bean Brands/Member's Mark.png",
    description: "100% Colombian Supremo beans roasted to a rich medium-dark threshold. Boasts deep dark chocolate depth, robust body, and lingering toasted hazelnut notes perfect with or without milk.",
    stats: {
      acidity: 44,
      sweetness: 70,
      body: 92,
      intensity: 92,
      aroma: 82
    }
  },
  {
    id: "barissimo",
    name: "Barissimo",
    origin: "Guatemala",
    roasted: "Highland Selection",
    roast: "Medium",
    imageRoast: "Medium",
    roastLevel: 3,
    tier: "Volcanic Highland Roast",
    tagline: "Volcanic Guatemalan soil producing cocoa warmth and dried stone fruits",
    notes: ["Chocolate", "Nuts", "Dried Fruit"],
    logo: "/Coffee Bean Brands/Barissimo.png",
    description: "Harvested from volcanic mountain slopes in Guatemala. Delivers a dependable, hearty balance of bittersweet chocolate, roasted walnut oiliness, and pleasant sun-dried fruit sweetness.",
    stats: {
      acidity: 68,
      sweetness: 76,
      body: 78,
      intensity: 74,
      aroma: 78
    }
  }
];

export const customizationOptions = {
  size: ["Small", "Medium", "Large"],
  temperature: ["Hot", "Iced"],
  milk: ["Whole", "Oat"],
  bean: coffeeBeans.filter(b => !b.outOfStock).map(b => b.name),
  sweetness: ["None", "Light", "Medium", "Extra Sweet"]
};

export function getDrinkImageUrl(item, selections = {}) {
  if (!item) return "";
  const folder = item.name;
  const sizeStr = (selections.size || "Medium").toLowerCase() + " size";

  let roastStr = "";
  if (item.allowedOptions && item.allowedOptions.includes("bean")) {
    const selectedBean = coffeeBeans.find(b => b.name === selections.bean) || coffeeBeans.find(b => !b.outOfStock) || coffeeBeans[0];
    const imageRoast = selections.roast || selectedBean?.imageRoast || "Medium";
    roastStr = `${imageRoast.toLowerCase()} roast`;
  } else if (item.allowedOptions && item.allowedOptions.includes("roast")) {
    roastStr = (selections.roast || "Medium").toLowerCase() + " roast";
  }

  const isIced = (item.allowedOptions && item.allowedOptions.includes("temperature") && selections.temperature === "Iced");

  const parts = [sizeStr];
  if (roastStr) parts.push(roastStr);
  if (isIced) parts.push("iced");

  if (item.id === "americano" && selections.milk && selections.milk !== "None") {
    parts.push("and milk");
  }

  const drinkName = item.name.toLowerCase();
  const filename = `${parts.join(" ")} ${drinkName}.png`;
  return `/assets/menu/${folder}/${filename}`;
}
