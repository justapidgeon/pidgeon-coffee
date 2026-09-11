export const menuItems = [
  {
    id: "espresso",
    name: "Espresso",
    price: 3.50,
    description: "A concentrated shot of pure coffee essence, thick and rich with a beautiful crema.",
    category: "Hot Coffee",
    image: "/assets/menu/Espresso/medium size medium roast espresso.png",
    allowedOptions: ["size", "roast"],
    baseSize: 2
  },
  {
    id: "americano",
    name: "Americano",
    price: 3.99,
    description: "A bold double shot of espresso tempered with hot water, preserving the rich crema and deep flavor.",
    category: "Hot Coffee",
    image: "/assets/menu/Americano/medium size medium roast americano.png",
    allowedOptions: ["size", "temperature", "roast", "sweetness", "milk"],
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
    allowedOptions: ["size", "temperature", "roast", "milk", "sweetness"],
    baseSize: 9
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 4.75,
    description: "Equal parts espresso, steamed milk, and thick, airy foam. A perfectly balanced textured classic.",
    category: "Hot Coffee",
    image: "/assets/menu/Cappuccino/medium size medium roast cappuccino.png",
    allowedOptions: ["size", "temperature", "roast", "milk", "sweetness"],
    baseSize: 6
  },
  {
    id: "mocha",
    name: "Mocha",
    price: 5.25,
    description: "A rich blend of espresso, steamed milk, and premium chocolate syrup, topped with whipped cream.",
    category: "Hot Coffee",
    image: "/assets/menu/Mocha/medium size medium roast mocha.png",
    allowedOptions: ["size", "temperature", "roast", "milk", "sweetness"],
    baseSize: 9
  },
  {
    id: "flat-white",
    name: "Flat White",
    price: 4.50,
    description: "Ristretto espresso shots combined with micro-foamed milk for a stronger, more velvety coffee experience.",
    category: "Hot Coffee",
    image: "/assets/menu/Flat White/medium size medium roast flat white.png",
    allowedOptions: ["size", "temperature", "roast", "milk", "sweetness"],
    baseSize: 6
  },
  {
    id: "macchiato",
    name: "Macchiato",
    price: 3.75,
    description: "A classic espresso shot 'marked' with a dollop of frothy milk for a touch of sweetness.",
    category: "Hot Coffee",
    image: "/assets/menu/Macchiato/medium size medium roast macchiato.png",
    allowedOptions: ["size", "temperature", "roast", "milk", "sweetness"],
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

export const customizationOptions = {
  size: ["Small", "Medium", "Large"],
  temperature: ["Hot", "Iced"],
  milk: ["Whole", "Oat"],
  roast: ["Light", "Medium", "Dark"],
  sweetness: ["None", "Light", "Medium", "Extra Sweet"]
};

export function getDrinkImageUrl(item, selections = {}) {
  if (!item) return "";
  const folder = item.name;
  const sizeStr = (selections.size || "Medium").toLowerCase() + " size";
  const roastStr = (item.allowedOptions && item.allowedOptions.includes("roast"))
    ? (selections.roast || "Medium").toLowerCase() + " roast"
    : "";
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
