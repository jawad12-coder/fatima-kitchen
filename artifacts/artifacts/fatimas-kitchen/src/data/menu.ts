// Hero banner
import heroBanner from "@assets/generated_images/professional_food_photography_hero_d99d.png";

// Properly named food images — matched to actual dishes
import frenchFriesImg from "@assets/generated_images/food_french-fries.png";
import chickenNuggetsImg from "@assets/generated_images/food_chicken-nuggets.png";
import chickenBurgerImg from "@assets/generated_images/food_chicken-burger.png";
import springRollsImg from "@assets/generated_images/food_spring-rolls.png";
import shamiKababImg from "@assets/generated_images/food_shami-kabab.png";
import seekhKababImg from "@assets/generated_images/food_seekh-kabab.png";
import chickenTikkaImg from "@assets/generated_images/food_chicken-tikka.png";
import alooParathaImg from "@assets/generated_images/food_aloo-paratha.png";
import plainParathaImg from "@assets/generated_images/food_plain-paratha.png";
import lassiImg from "@assets/generated_images/food_lassi.png";

// Fallbacks from original generation (used for categories not yet regenerated)
import fullMenuImg from "@assets/image_1781449668834.png";

export const IMAGE_MAP: Record<string, string> = {
  hero: heroBanner,
  // Starters
  fries: frenchFriesImg,
  nuggets: chickenNuggetsImg,
  burger: chickenBurgerImg,
  springroll: springRollsImg,
  // BBQ & Kabab
  shami: shamiKababImg,
  seekh: seekhKababImg,
  tikka: chickenTikkaImg,
  // Bread
  alooparatha: alooParathaImg,
  paratha: plainParathaImg,
  // Beverages
  lassi: lassiImg,
  // Fallbacks — same visual family
  drink: lassiImg,
  roll: springRollsImg,
  kabab: seekhKababImg,
  egg: heroBanner,
  curry: heroBanner,
  noodles: heroBanner,
  salad: heroBanner,
  chutney: lassiImg,
  fullMenu: fullMenuImg,
};

export const MENU_ITEMS = [
  // DEALS
  { id: 'd1',  name: 'Deal 1',  description: 'Chicken patty burger, French fries and Soft drink 345ml', price: 330, category: 'deals', imageKey: 'burger' },
  { id: 'd2',  name: 'Deal 2',  description: '6 Pieces chicken nugget with French fries',               price: 265, category: 'deals', imageKey: 'nuggets' },
  { id: 'd3',  name: 'Deal 3',  description: '2 Aloo paratha with Soft drink 345ml',                    price: 175, category: 'deals', imageKey: 'alooparatha' },
  { id: 'd4',  name: 'Deal 4',  description: '2 Aloo paratha with Soft drink 500ml',                    price: 310, category: 'deals', imageKey: 'alooparatha' },
  { id: 'd5',  name: 'Deal 5',  description: '3 Aloo paratha with Raita',                               price: 399, category: 'deals', imageKey: 'alooparatha' },
  { id: 'd6',  name: 'Deal 6',  description: '3 Aloo paratha with 3 Omelette',                          price: 375, category: 'deals', imageKey: 'alooparatha' },
  { id: 'd7',  name: 'Deal 7',  description: 'Paratha, Fry anda and Tea',                               price: 175, category: 'deals', imageKey: 'paratha' },
  { id: 'd8',  name: 'Deal 8',  description: '2 Chicken patty burger, French fries and 1 Ltr Soft drink', price: 660, category: 'deals', imageKey: 'burger' },
  { id: 'd9',  name: 'Deal 9',  description: '2 Aloo paratha and 2 Karak Chai',                         price: 160, category: 'deals', imageKey: 'alooparatha' },
  { id: 'd10', name: 'Deal 10', description: '2 Chatpata Knorr Noodle',                                 price: 660, category: 'deals', imageKey: 'noodles' },

  // STARTERS
  { id: 's1', name: 'French Fries (Half Box)',         description: 'Homemade golden and crisp French fries',                              price: 75,  category: 'starters', imageKey: 'fries' },
  { id: 's2', name: 'French Fries (Full Box)',         description: 'Homemade golden and crisp French fries',                              price: 150, category: 'starters', imageKey: 'fries' },
  { id: 's3', name: 'Chicken Nuggets (6 Piece)',       description: 'Breaded nugget shaped chicken patties',                               price: 220, category: 'starters', imageKey: 'nuggets' },
  { id: 's4', name: 'Simple Patty Burger',             description: 'Rounded burger with chicken patty, ketchup and mayonnaise',          price: 215, category: 'starters', imageKey: 'burger' },
  { id: 's5', name: 'Simple Patty Burger with Cheese', description: 'Rounded burger with chicken patty, ketchup and mayonnaise',          price: 275, category: 'starters', imageKey: 'burger' },
  { id: 's6', name: 'Spring Rolls (2 Piece)',          description: 'Chicken spring rolls, light with crispy-crackly skin',                price: 100, category: 'starters', imageKey: 'springroll' },
  { id: 's7', name: 'Chicken Shami Kabab (2 Piece)',   description: 'Pan-fried shami kabab patties',                                      price: 115, category: 'starters', imageKey: 'shami' },
  { id: 's8', name: 'Chatpata Knorr Noodles',         description: 'Tasteful chatpata flavored knorr noodles, cooked to perfection',     price: 115, category: 'starters', imageKey: 'noodles' },

  // SANDWICHES
  { id: 'sw1', name: 'Egg Sandwich (2 Slices)',         description: 'Freshly made egg sandwich',     price: 160, category: 'sandwiches', imageKey: 'roll' },
  { id: 'sw2', name: 'Chicken Mayo Sandwich (2 Slices)', description: 'Chicken mayo sandwich',        price: 180, category: 'sandwiches', imageKey: 'roll' },

  // BAR BQ
  { id: 'b1', name: 'Chicken Tikka Piece', description: 'Marinated grilled chicken tikka', price: 260, category: 'barbq', imageKey: 'tikka' },
  { id: 'b2', name: 'Seekh Kabab',         description: 'Chargrilled seekh kabab',         price: 75,  category: 'barbq', imageKey: 'seekh' },

  // PAKISTANI CUISINE
  { id: 'p1', name: 'Chicken Shami Kabab (2 Piece)', description: 'Traditional chicken shami kabab', price: 100, category: 'pakistani', imageKey: 'shami' },
  { id: 'p2', name: 'Aloo Anday',                    description: 'Egg and potato curry',            price: 135, category: 'pakistani', imageKey: 'egg' },
  { id: 'p3', name: 'Omelette',                      description: 'Fresh egg omelette',              price: 80,  category: 'pakistani', imageKey: 'egg' },
  { id: 'p4', name: 'Fry Anda (Full or Half Fry)',   description: 'Fried egg, full fry or half fry', price: 50,  category: 'pakistani', imageKey: 'egg' },
  { id: 'p5', name: 'Boiled Egg (2 Eggs)',            description: 'Soft boiled eggs',               price: 100, category: 'pakistani', imageKey: 'egg' },
  { id: 'p6', name: 'Anda Pyaz Ka Salan',            description: 'Egg and onion curry',            price: 150, category: 'pakistani', imageKey: 'curry' },
  { id: 'p7', name: 'Bhindi',                        description: 'Stir-fried okra',                price: 165, category: 'pakistani', imageKey: 'curry' },

  // PARATHA & ROTI
  { id: 'r1', name: 'Paratha',            description: 'Crispy layered flatbread',   price: 75,  category: 'paratha', imageKey: 'paratha' },
  { id: 'r2', name: 'Aloo ka Paratha',   description: 'Potato-stuffed flatbread',   price: 120, category: 'paratha', imageKey: 'alooparatha' },
  { id: 'r3', name: 'Mooli Ka Paratha',  description: 'Radish-stuffed flatbread',   price: 130, category: 'paratha', imageKey: 'alooparatha' },
  { id: 'r4', name: 'Chini Wala Pratha', description: 'Sweet sugar flatbread',      price: 100, category: 'paratha', imageKey: 'paratha' },
  { id: 'r5', name: 'Sadi Chapati',      description: 'Simple plain chapati',       price: 30,  category: 'paratha', imageKey: 'paratha' },
  { id: 'r6', name: 'Achar & Paratha',   description: 'Pickle served with paratha', price: 132, category: 'paratha', imageKey: 'alooparatha' },
  { id: 'r7', name: 'Makhan Wali Chapati', description: 'Butter chapati',           price: 49,  category: 'paratha', imageKey: 'paratha' },

  // SIDES
  { id: 'si1', name: 'Imli Ki Chutney',                description: 'Tamarind chutney',                  price: 100, category: 'sides', imageKey: 'chutney' },
  { id: 'si2', name: 'Green Chutney',                   description: 'Fresh green chutney',               price: 80,  category: 'sides', imageKey: 'chutney' },
  { id: 'si3', name: 'Raita',                           description: 'Yogurt dip',                        price: 75,  category: 'sides', imageKey: 'chutney' },
  { id: 'si4', name: 'Mixed Achar',                     description: 'Mixed pickle',                      price: 180, category: 'sides', imageKey: 'chutney' },
  { id: 'si5', name: 'Kachumber Salad',                 description: 'Fresh vegetable salad',             price: 50,  category: 'sides', imageKey: 'salad' },
  { id: 'si6', name: 'Shami Kabab Frozen (8 pieces)',   description: 'Frozen shami kabab, 8 pieces',      price: 180, category: 'sides', imageKey: 'shami' },
  { id: 'si7', name: 'Shami Kabab Frozen (12 pieces)',  description: 'Frozen shami kabab, 12 pieces',     price: 255, category: 'sides', imageKey: 'shami' },

  // BEVERAGES
  { id: 'bv1', name: 'Lassi',            description: 'Traditional yogurt drink', price: 140, category: 'beverages', imageKey: 'lassi' },
  { id: 'bv2', name: 'Apple Milkshake',  description: 'Fresh apple milkshake',   price: 220, category: 'beverages', imageKey: 'lassi' },
  { id: 'bv3', name: 'Dates Milkshake',  description: 'Rich dates milkshake',    price: 215, category: 'beverages', imageKey: 'lassi' },
  { id: 'bv4', name: 'Soft Drink 345ml', description: 'Chilled soft drink',      price: 50,  category: 'beverages', imageKey: 'drink' },
  { id: 'bv5', name: 'Soft Drink 500ml', description: 'Chilled soft drink',      price: 70,  category: 'beverages', imageKey: 'drink' },
  { id: 'bv6', name: 'Sting',            description: 'Sting energy drink',      price: 70,  category: 'beverages', imageKey: 'drink' },
  { id: 'bv7', name: 'Tea',              description: 'Freshly brewed tea',      price: 60,  category: 'beverages', imageKey: 'drink' },
  { id: 'bv8', name: 'Coffee',           description: 'Hot coffee',              price: 150, category: 'beverages', imageKey: 'drink' },
];

export const CATEGORIES = [
  { id: 'deals',      label: 'Deals',            icon: 'Tag' },
  { id: 'starters',   label: 'Starters',         icon: 'Pizza' },
  { id: 'sandwiches', label: 'Sandwiches',        icon: 'Sandwich' },
  { id: 'barbq',      label: 'Bar BQ',            icon: 'Flame' },
  { id: 'pakistani',  label: 'Pakistani Cuisine', icon: 'Utensils' },
  { id: 'paratha',    label: 'Paratha and Roti',  icon: 'Disc' },
  { id: 'sides',      label: 'Sides',             icon: 'Salad' },
  { id: 'beverages',  label: 'Beverages',         icon: 'Coffee' },
];
