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
    id: "partaker",
    name: "Partaker",
    origin: "Ethiopia",
    roasted: "Harrisburg, NC",
    roast: "Medium",
    imageRoast: "Medium",
    roastLevel: 3,
    tier: "Single-Origin Reserve",
    tagline: "Vibrant Ethiopian heirloom with juicy blueberry and apricot sweetness",
    notes: ["Blueberry", "Dried Apricot", "Caramelized Sugars"],
    logo: "/Coffee Bean Brands/Partaker.png",
    description: "Craft roasted in Harrisburg, NC. Cultivated in high-altitude Ethiopian heirloom soils, delivering a cup bursting with sweet wild blueberry, candied apricot acidity, and golden caramelized sugars.",
    stats: {
      acidity: 88,
      sweetness: 86,
      body: 66,
      intensity: 70,
      aroma: 95
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
  bean: coffeeBeans.map(b => b.name),
  sweetness: ["None", "Light", "Medium", "Extra Sweet"]
};

export function getDrinkImageUrl(item, selections = {}) {
  if (!item) return "";
  const folder = item.name;
  const sizeStr = (selections.size || "Medium").toLowerCase() + " size";

  let roastStr = "";
  if (item.allowedOptions && item.allowedOptions.includes("bean")) {
    const selectedBean = coffeeBeans.find(b => b.name === selections.bean) || coffeeBeans[0];
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
