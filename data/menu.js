export const menuItems = [
  {
    id: "espresso",
    name: "Espresso",
    price: 3.50,
    description: "A concentrated shot of pure coffee essence, thick and rich with a beautiful crema.",
    category: "Hot Coffee",
    image: "/assets/menu/espresso.png",
    allowedOptions: ["size", "roast"]
  },
  {
    id: "americano",
    name: "Americano",
    price: 3.99,
    description: "A bold double shot of espresso tempered with hot water, preserving the rich crema and deep flavor.",
    category: "Hot Coffee",
    image: "/assets/menu/americano.png",
    allowedOptions: ["size", "temperature", "roast", "sweetness", "milk"]
  },
  {
    id: "latte",
    name: "Latte",
    price: 4.95,
    description: "Espresso with silky steamed milk and a thin layer of luxurious micro-foam. The ultimate comfort drink.",
    category: "Hot Coffee",
    image: "/assets/menu/latte.png",
    allowedOptions: ["size", "temperature", "roast", "milk", "sweetness"]
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 4.75,
    description: "Equal parts espresso, steamed milk, and thick, airy foam. A perfectly balanced textured classic.",
    category: "Hot Coffee",
    image: "/assets/menu/cappuccino.png",
    allowedOptions: ["size", "temperature", "roast", "milk", "sweetness"]
  },
  {
    id: "mocha",
    name: "Mocha",
    price: 5.25,
    description: "A rich blend of espresso, steamed milk, and premium chocolate syrup, topped with whipped cream.",
    category: "Hot Coffee",
    image: "/assets/menu/mocha.png",
    allowedOptions: ["size", "temperature", "roast", "milk", "sweetness"]
  },
  {
    id: "flat-white",
    name: "Flat White",
    price: 4.50,
    description: "Ristretto espresso shots combined with micro-foamed milk for a stronger, more velvety coffee experience.",
    category: "Hot Coffee",
    image: "/assets/menu/flat-white.png",
    allowedOptions: ["size", "temperature", "roast", "milk", "sweetness"]
  },
  {
    id: "macchiato",
    name: "Macchiato",
    price: 3.75,
    description: "A classic espresso shot 'marked' with a dollop of frothy milk for a touch of sweetness.",
    category: "Hot Coffee",
    image: "/assets/menu/macchiato.png",
    allowedOptions: ["size", "temperature", "roast", "milk", "sweetness"]
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    price: 5.25,
    description: "Chilled espresso and milk poured over ice. Refreshing, smooth, and perfect for a hot day.",
    category: "Cold Coffee",
    image: "/assets/menu/iced-latte.png",
    allowedOptions: ["size", "roast", "milk", "sweetness"]
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    price: 5.50,
    description: "Premium ceremonial grade matcha whisked with your choice of milk for an earthy, vibrant energy boost.",
    category: "Specialty",
    image: "/assets/menu/matcha-latte.png",
    allowedOptions: ["size", "temperature", "milk", "sweetness"]
  }
];

export const customizationOptions = {
  size: ["Small", "Medium", "Large"],
  temperature: ["Hot", "Iced", "Blended"],
  milk: ["Whole", "Oat", "Almond", "Soy", "Coconut", "None"],
  roast: ["Light", "Medium", "Dark", "Decaf"],
  sweetness: ["None", "Light", "Medium", "Extra Sweet"]
};
