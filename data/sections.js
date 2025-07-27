// app/data/sections.js

export const SECTIONS = [
  // — Breakfast —
  {
    campus: "Livi",
    meal:  'Breakfast',
    title: 'Breakfast Meats',
    items: [
      { id: '143000*3', name: 'Grilled Chicken Sausage Links',        serving: '2 EACH' },
      { id: '195018*3', name: 'Pork Sausage Links',                    serving: '3 EACH' },
      { id: '210047*3', name: 'Savory Plant-Based Breakfast Patties',  serving: '2 EACH' },
    ]
  },
  {
    campus: "Livi",
    meal:  'Breakfast',
    title: 'Breakfast Entrées',
    items: [
      { id: '061003*1', name: 'Hard Boiled Eggs',      serving: '1 EACH' },
      { id: '061002*4', name: 'Scrambled Eggs',        serving: '4 OZ'   },
      { id: '147004*2', name: 'Texas French Toast',    serving: '2 SLICE' },
    ]
  },
  {
    campus: "Livi",
    meal:  'Breakfast',
    title: 'Bagels',
    items: [
      { id: '210000*1', name: 'Assorted Bagels',       serving: '1 EACH' },
      { id: '917018*1', name: 'Assorted Donuts',       serving: '1 EACH' },
    ]
  },
  {
    campus: "Livi",
    meal:  'Breakfast',
    title: 'Yogurt Bar',
    items: [
      { id: '120005*1', name: 'Honeydew Melon',        serving: '1 WEDGE' },
      { id: '120004*1', name: 'Red Seedless Grapes',   serving: '1 CUP'   },
      // external‐link yogurts:
      { id: 'VANILLA*1',   name: 'Vanilla Yogurt',      serving: '1 CUP',   link: 'https://example.com/vanilla-yogurt' },
      { id: 'STRAWBERRY*1',name: 'Strawberry Yogurt',   serving: '1 CUP',   link: 'https://example.com/strawberry-yogurt' },
    ]
  },
  {
    campus: "Livi",
    meal:  'Breakfast',
    title: 'Starch & Potatoes',
    items: [
      { id: '161030*4', name: 'Tater Tots',            serving: '4 OZ'    },
    ]
  },

  // — Lunch (you can fill these out when ready) —
  {
    campus: 'Livi',
    meal: 'Lunch',
    title: 'Salad Bar',
    items: [
      { id: '130120*3', name: 'Broccoli',        serving: '3 OZ'   },
      { id: '130080*1', name: 'Cucumbers',       serving: '1 OZ'   },
      { id: '130084*2', name: 'Iceberg Lettuce', serving: '2 OZ'   },
      { id: '130081*3', name: 'Tomato Wedges',   serving: '3 EACH' },
      { id: '130082*3', name: 'Tossed Salad',    serving: '3 OZ'   }
    ]
  }, 
  {
    campus: 'Livi',
    meal:    'Lunch',
    title:   'Deli Bar Entree',
    items: [
      { id: '111241*4', name: 'Grilled Chicken Breast',        serving: '4 OZ' },
    ]
  },
  {
    campus: 'Livi',
    meal:    'Lunch',
    title:   'Entrees',
    items: [
      { id: '111042*1', name: 'Chicken Thigh with Cajun Sauce', serving: '1 EACH' },
      { id: '170021*4', name: 'English Style Cod',              serving: '4 OZ' },
    ]
  },
  {
    campus: 'Livi',
    meal:    'Lunch',
    title:   'Vegetables',
    items: [
      { id: '500231*3', name: 'Fresh Broccoli Buds',            serving: '3 OZ' },
    ]
  },
  {
    campus: 'Livi',
    meal:    'Lunch',
    title:   'Asian Inspired Cuisine',
    items: [
      { id: '019815*6', name: 'Beef and Broccoli',              serving: '6 OZ' },
      { id: '111241*4', name: 'Grilled TSO Chicken',          serving: '4 OZ'  },
      { id: '111042*1', name: 'Steamed White Rice',     serving: '4 OZ'  },
    ]
  },
  {
    campus: 'Livi',
    meal:    'Lunch',
    title:   'Pizza & Pasta',
    items: [    
      { id: '111073*4', name: '3 Cheese Penne',  serving: '6 OZ' },
      { id: '163017*4', name: 'Medium Pasta Shells',    serving: '4 OZ'  },
      { id: '140008*6', name: 'Pizza Turkey Pepperoni',      serving: '1 SLICE' },
      { id: '170063*4', name: 'Plum Tomato Marinara', serving: '4 OZ' },
      { id: '130298*1', name: 'Round Cheese Pizza',     serving: '1 SLICE' },
    ]
  },
  {
    campus: 'Livi',
    meal:   'Lunch',
    title:  'Desserts',   // ← your own heading here
    items: [
      { id: '182024*2', name: 'Soft Baked Cookies',     serving: '2 EACH' }
    ]
  },
  // …etc for other lunch sections…

  // — Dinner (ditto)—
  {
    campus: 'Livi',
    meal: 'Dinner',
    title: 'Salad Bar',
    items: [
      { id: '130080*1', name: 'Cucumbers',       serving: '1 OZ'   },
      { id: '130084*2', name: 'Iceberg Lettuce', serving: '2 OZ'   },
      { id: '130081*3', name: 'Tomato Wedges',   serving: '3 EACH' },

    ]
  },
  {
    campus: 'Livi',
    meal:   'Dinner',
    title:  'Entrees',    // ← your heading here
    items: [
      { id: '170236*5', name: 'Baked Salmon with Mango Radish Salsa', serving: '5 OZ' },
      { id: '130513*3', name: 'Baked Sweet Plantains',                serving: '3 OZ' },
      { id: '561002*4', name: 'Carne Asada',                          serving: '4 OZ' },
      { id: '163000*4', name: 'Mexican Red Rice',                     serving: '4 OZ' },
      { id: '130501*5', name: 'Mexcian Street Corn',                  serving: '5 OZ' },
    ]
  },
  {
    campus: 'Livi',
    meal:   'Dinner',
    title:  'Cook to Order Bar',    // ← your heading here
    items: [
      { id: '800009*1',   name: 'Grilled Hot Dogs',            serving: '1 EACH' },
      { id: '161033*4',   name: 'Krinkle Cut French Fries',    serving: '4 OZ'   },
    ]
  },
  {
    campus: 'Livi',
    meal:   'Dinner',
    title:  'Asian Inspired Cuisine',    // ← your heading here
    items: [
      { id: '163001*4',   name: 'Baked Brown Rice',            serving: '4 OZ'   },
      { id: '111083*6',   name: 'Chicken Stir Fry',            serving: '6 OZ'   },
      { id: '170022*6',   name: 'Hoisin Shrimp Stir Fry',       serving: '6 OZ'   },
      { id: '111042*1', name: 'Steamed White Rice',     serving: '4 OZ'  },

    ]
  },
  {
    campus: 'Livi',
    meal:   'Dinner',
    title:  'Pizza & Pasta',    // ← your heading here
    items: [
      { id: '157009*3', name: 'Alfredo Sauce',          serving: '3 OZ'  },
      { id: '140127*6', name: 'Cheese Ravioli Aioli',  serving: '6 EACH'},
      { id: '140045*4', name: 'Penne Pasta',            serving: '4 OZ'  },
      { id: '140008*6', name: 'Pizza Turkey Pepperoni',      serving: '1 SLICE' },
      { id: '130298*1', name: 'Round Cheese Pizza',     serving: '1 SLICE' },
     
    ]
  },
  {
    campus: "CD",
    meal:   "Breakfast",
    title:  "Breakfast Meats",    // ← fill in your own section title
    items: [
      { id: "113000*2", name: "Grilled Turkey Sausage Links", serving: '2 EACH'  },
      { id: "195020*2", name: "Pork Roll", serving: '2 OZ'  },
      {
        id: "195037*3",
        name: "Sliced Bacon",
        serving: "1 SLICE"
      }
    ]
  },
  {
    campus: "CD",
    meal: "Breakfast",
    title: "Breakfast Entrees",
    items: [
      { id: "147009*5", name: "French Toast Sticks" , serving: '5 EACH'},
      { id: "061003*1", name: "Hard Boiled Eggs", serving: '1 EACH' },
      { id: "143116*6", name: "Oatmeal" , serving: '6 OZ'},
      { id: "061002*4", name: "Scrambled Eggs" , serving: '4 OZ'}
    ]
  },
  {
    campus: "CD",
    meal: "Breakfast",
    title: "Breakfast Entrees",
    items: [
      { id: 'BAGEL*1',   name: 'Assorted Bagels',      serving: '1 BAGEL',   link: 'hhttps://www.nutritionix.com/food/plain-bagel' },
      { id: "217015*1", name: "Choc Iced Long John Donut" , serving: '1 DONUT'},
      { id: "213006*1", name: "Corn Muffin" , serving: '1 MUFFIN'},
    ]
  },
  {
    campus: "CD",
    meal: "Breakfast",
    title: "Fruit Assortments",
    items: [
      { id: "120001*1", name: "Pineapple", serving: '1 SLICE' },
      { id: "120002*1", name: "Strawberries" , serving: '1/2 OZ'},
      { id: "120000*1", name: "Watermelon" , serving: '1 WEDGE'}
    ]
  },
  {
    campus: "CD",
    meal: "Breakfast",
    title: "Starch and Potatoes",
    items: [
      { id: "161002*4", name: "Home Fries" , serving: '4 OZ (about 20 - 25 fries)'}
    ]
  },

  //COOK DOUG LUNCH
  {
    campus: 'CD',
    meal: 'Lunch',
    title: 'Salad Bar',
    items: [
      { id: '130120*3', name: 'Broccoli',        serving: '1 OZ'   },
      { id: '130080*1', name: 'Cucumbers',       serving: '1 OZ'   },
      { id: '130084*2', name: 'Iceberg Lettuce', serving: '4 OZ'   },
      { id: '130081*3', name: 'Tomato Wedges',   serving: '3 EACH' },
    ]
  }, 
  {
    campus: "CD",
    meal:   "Lunch",
    title:  "Entrees",
    items: [
      {
        id:      "111087*6",
        name:    "Chicken Buffalo Wings Fresh",
        serving: "6 OZ (about 3 - 4 wings)"
      },
      {
        id:      "800082*1",
        name:    "Grilled Cheddar On Wheat",
        serving: "1 EACH"
      },
      {
        id:      "019812*6",
        name:    "Texas Chili",
        serving: "6 OZ"
      }
    ]
  },
   {
    campus: "CD",
    meal: "Lunch",
    title: "Starch and Potatoes",
    items: [
      { id: "161002*4", name: "French Fries" , serving: '4 OZ (about 20 - 25 fries)'}
    ]
  },
  {
    campus: "CD",
    meal: "Lunch",
    title: "Vegetables",
    items: [
      { id: "130118*4", name: "Baby Carrots W/ Corn", serving: "4 OZ" },
    ]
  },
  {
    campus: "CD",
    meal: "Lunch",
    title: "Lunch Breads",
    items: [
       { id: "218036*1", name: "Big Martys Hamburger Bun", serving: "1 EACH" },
      { id: "218026*1", name: "Club Roll 6\" Sliced",   serving: "1 EACH" },
     

    ]
  },
  {
    campus: "CD",
    meal: "Lunch",
    title: "Bakery Misc",
    items: [
       { id: "217076*1", name: "Bakers Choice Lite Cake", serving: "1 EACH" },
      { id: "182011*1", name: "M&M Brownie",           serving: "1 SLICE" },
    ]
  },
  {
    campus: "CD",
    meal: "Lunch",
    title: "Pizza & Pasta",
    items: [
      { id: "111242*1",  name: "Round Pepperoni Pizza",        serving: "1 SLICE" }

    ]
  },
  {
    campus: 'CD',
    meal: 'Dinner',
    title: 'Salad Bar',
    items: [
      { id: '130120*3', name: 'Broccoli',        serving: '3 OZ'   },
      { id: '130080*1', name: 'Cucumbers',       serving: '1 OZ'   },
      { id: '130084*2', name: 'Iceberg Lettuce', serving: '2 OZ'   },
      { id: '130081*3', name: 'Tomato Wedges',   serving: '3 EACH' },
      { id: '130082*3', name: 'Tossed Salad',    serving: '3 OZ'   }
    ]
  }, 
  {
    campus: "CD",
    meal: "Dinner",
    title: "Entrees",
    items: [
      { id: "111091*10", name: "Baked Chicken",          serving: "10 OZ" },
      { id: "170016*4",  name: "Breaded Fried Flounder", serving: "4 OZ" },
      { id: "019821*4",  name: "Marinated Flank Steak",  serving: "4 OZ" }
    ]
  },
  {
    campus: "CD",
    meal: "Dinner",
    title: "Strach & Potatoes",
    items: [
      { id: "161051*1", name: "Baked Potatoes",        serving: "1 Each" },
      { id: "130104*4", name: "Sauteed Yellow Squash", serving: "4 OZ" }
    ]
  },
  {
    campus: "CD",
    meal: "Dinner",
    title: "Vegetables",
    items: [
      { id: "130104*4", name: "Sauteed Yellow Squash", serving: "4 OZ" }
    ]
  },
   {
    campus: "CD",
    meal: "Dinner",
    title: "Pizza & Pasta",
    items: [
      { id: "111242*1",  name: "Round Pepperoni Pizza",        serving: "1 SLICE" }

    ]
  },
   {
    campus: "CD",
    meal: "Dinner",
    title: "Desserts",
    items: [
      { id: "181084*1", name: "Marble Sheet Cake W/ Marble Icing", serving: "1 Slice" }
    ]
  },

  //BUSCH BFAST
  {
    campus: "Busch",
    meal:   "Breakfast",
    title:  "Breakfast Meats",    // ← fill in your own section title
    items: [
      {
        id: "147003*2",
        name: "Buttermilk Pancake",
        serving: "2 EACH"
      },
      {
        id: "161025*4",
        name: "Crispy Cube Potatoes",
        serving: "4 OZ"
      },
      { id: "113000*2", name: "Grilled Turkey Sausage Links", serving: '2 EACH'  },
      { id: '210047*3', name: 'Savory Plant-Based Breakfast Patties',  serving: '2 EACH' }
    ]
  },
  {
    campus: "Busch",
    meal:  'Breakfast',
    title: 'Breakfast Entrées',
    items: [
      { id: '061003*1', name: 'Hard Boiled Eggs',      serving: '1 EACH' },
      { id: "143116*6", name: "Oatmeal" , serving: '6 OZ'},
      { id: '061002*4', name: 'Scrambled Eggs',        serving: '4 OZ'   },
      {
      id: "https://www.nutritionix.com/food/veggie-omelette-with-cheese",
      name: "Veggie Omelette With Cheese",
      serving: "3-egg omelet (445g)"
    }
    ]
  },
  {
    campus: "Busch",
    meal:  'Breakfast',
    title: 'Bagels',
    items: [
      { id: '210000*1', name: 'Assorted Bagels',       serving: '1 EACH' },
      { id: '917018*1', name: 'Assorted Donuts',       serving: '1 EACH' },
    ]
  },

  //BUSCH LUNCH
  { 
  "campus": "Busch",
  "meal": "Lunch",
  "title": "Delie Bar Entree",
  "items": [
    { "id": "165005*4", "name": "Chicken Salad", "serving": "4 OZ" }
  ]
  },
  {
  campus: "Busch",
  meal: "Lunch",
  title: "Entrees",
  items: [
    { id: "500256*5", name: "Baked Cod Teriyaki", serving: "5 OZ" },
    { id: "140046*6", name: "Baked Macaroni & Cheese", serving: "6 OZ" },
    { id: "130003*5", name: "Classic Eggplant Parmesan", serving: "5 OZ" },
    { id: "161041*6", name: "Fried Sweet Potatoes", serving: "6 OZ" },
    { id: "130112*4", name: "Garlicky Sauteed Zucchini", serving: "4 OZ" },
    { id: "111022*6", name: "Honey Thai Chili Glazed Chicken Wings", serving: "6 OZ" },
    { id: "163017*4", name: "Steamed White Rice", serving: "4 OZ" }
  ]
},
{
  campus: "Busch",
  meal: "Lunch",
  title: "Cantina",
  items: [
    { id: "150002*1", name: "6\" Flour Tortilla", serving: "1 EACH" },
    { id: "163001*4", name: "Baked Brown Rice", serving: "4 OZ" },
    { id: "019802*4", name: "Beef Taco Meat", serving: "4 OZ" },
    { id: "143058*4", name: "Homestyle Refried Beans", serving: "4 OZ" },
    { id: "143038*4", name: "Protein Packed Tempeh Taco Meat", serving: "4 OZ" },
    { id: "111321*4", name: "Southwest Chicken", serving: "4 OZ" },
    { id: "163017*4", name: "Steamed White Rice", serving: "4 OZ" },
    { id: "150000*2", name: "Taco Shells", serving: "2 EACH" },
    { id: "150094*2", name: "Tricolor Tortilla Chips", serving: "2 OZ" }
  ]
},
{
  campus: "Busch",
  meal: "Lunch",
  title: "Cantina Sides",
  items: [
    { id: "130039*2", name: "Avocado Pulp", serving: "2 OZ" },
    { id: "157011*2", name: "Cheese Sauce", serving: "2 OZ" },
    { id: "130049*2", name: "Diced Tomatoes", serving: "2 OZ" },
    { id: "120015*1", name: "Lime Wedges", serving: "1 WEDGE" },
    { id: "157111*2", name: "Pico De Gallo", serving: "2 OZ" },
    { id: "150188*1", name: "Ripe Sliced Olives", serving: "1 OZ" },
    { id: "150013*2", name: "Salsa", serving: "2 OZ" },
    { id: "250001*3", name: "Seasoned Black Beans", serving: "3 OZ" },
    { id: "150021*1", name: "Shred Monterey Jack Cheese", serving: "1 OZ" },
    { id: "150022*1", name: "Shredded Cheddar Cheese", serving: "1 OZ" },
    { id: "130218*1", name: "Shredded Lettuce", serving: "1 OZ" },
    { id: "150024*1", name: "Sliced Jalapenos Peppers", serving: "1 OZ" },
    { id: "150173*2", name: "Sour Cream", serving: "2 OZ" }

  ]
},
{
  campus: "Busch",
  meal: "Lunch",
  title: "Cook to Order Bar",
  items: [
    { id: "019105*1", name: "Black Bean Burger", serving: "1 EACH" },
    { id: "019084*1", name: "Halal Hamburger", serving: "1 EACH" },
    { id: "218042*1", name: "Hamburger Potato Bun", serving: "1 EACH" },
    { id: "161033*4", name: "Krinkle Cut French Fries", serving: "4 OZ" },
    { id: "150019*5", name: "Pickle Chips", serving: "5 EACH" },
    { id: "130154*2", name: "Red Onion", serving: "2 OZ" },
    { id: "130198*2", name: "Shredded Lettuce", serving: "2 OZ" },
    { id: "150183*1", name: "Sliced Provolone Cheese", serving: "1 OZ" },
    { id: "130204*2", name: "Sliced Tomatoes", serving: "2 SLICE" },
    { id: "111093*1", name: "Turkey Burger", serving: "1 EACH" },
    { id: "150172*1", name: "Yellow American Cheese", serving: "1 SLICE" }

  ]
},
{
    campus: 'Busch',
    meal:   'Lunch',
    title:  'Pizza & Pasta',    // ← your heading here
    items: [
    { id: '157009*3', name: 'Alfredo Sauce',          serving: '3 OZ'  },
    { id: "111319*1", name: "Grilled Chicken Montreal", serving: "1 EACH" },
    { id: "157169*4", name: "Marinara Sauce", serving: "4 OZ" },
    { id: "140149*4", name: "Penne Pasta", serving: "4 OZ" },
    { id: "111243*1", name: "Pepperoni Pizza", serving: "1 SLICE" },
    { id: "111098*1", name: "Round Cheese Pizza", serving: "1 SLICE" }
      
     
    ]
  },
  {
  campus: "Busch",
  meal: "Lunch",
  title: "Rotisserie",
  items: [
    { id: "705158*4", name: "Grilled Vegetables", serving: "4 OZ" },
    { id: "111310*5", name: "Rotisserie Peruvian Chicken", serving: "5 OZ" }
  ]
},







//BUSCH DINNER
{
  campus: "Busch",
  meal: "Dinner",
  title: "Deli Bar Entree",
  items: [
    { id: "165005*4", name: "Chicken Salad", serving: "4 OZ" }
  ]
},

{
  campus: "Busch",
  meal: "Dinner",
  title: "Cantina",
  items: [
    { id: "150002*1", name: "6\" Flour Tortilla", serving: "1 EACH" },
    { id: "163001*4", name: "Baked Brown Rice", serving: "4 OZ" },
    { id: "019802*4", name: "Beef Taco Meat", serving: "4 OZ" },
    { id: "143058*4", name: "Homestyle Refried Beans", serving: "4 OZ" },
    { id: "143038*4", name: "Protein Packed Tempeh Taco Meat", serving: "4 OZ" },
    { id: "111321*4", name: "Southwest Chicken", serving: "4 OZ" },
    { id: "163017*4", name: "Steamed White Rice", serving: "4 OZ" },
    { id: "150000*2", name: "Taco Shells", serving: "2 EACH" },
    { id: "150094*2", name: "Tricolor Tortilla Chips", serving: "2 OZ" }
  ]
},

{
  campus: "Busch",
  meal: "Dinner",
  title: "Cantina Sides",
  items: [
    { id: "130039*2", name: "Avocado Pulp", serving: "2 OZ" },
    { id: "157011*2", name: "Cheese Sauce", serving: "2 OZ" },
    { id: "130049*2", name: "Diced Tomatoes", serving: "2 OZ" },
    { id: "120015*1", name: "Lime Wedges", serving: "1 WEDGE" },
    { id: "157111*2", name: "Pico De Gallo", serving: "2 OZ" },
    { id: "150188*1", name: "Ripe Sliced Olives", serving: "1 OZ" },
    { id: "150013*2", name: "Salsa", serving: "2 OZ" },
    { id: "250001*3", name: "Seasoned Black Beans", serving: "3 OZ" },
    { id: "150021*1", name: "Shred Monterey Jack Cheese", serving: "1 OZ" },
    { id: "150022*1", name: "Shredded Cheddar Cheese", serving: "1 OZ" },
    { id: "130218*1", name: "Shredded Lettuce", serving: "1 OZ" },
    { id: "150024*1", name: "Sliced Jalapenos Peppers", serving: "1 OZ" },
    { id: "150173*2", name: "Sour Cream", serving: "2 OZ" }
  ]
},

{
  campus: "Busch",
  meal: "Dinner",
  title: "Entrees",
  items: [
    { id: "140046*6", name: "Baked Macaroni & Cheese", serving: "6 OZ" },
    { id: "157011*2", name: "Cheese Sauce", serving: "2 OZ" },
    { id: "130003*5", name: "Classic Eggplant Parmesan", serving: "5 OZ" },
    { id: "800009*1", name: "Grilled Hot Dogs", serving: "1 EACH" },
    {
      id: "BakedSalmonw/DillSauce*1",
      name: "Baked Salmon w/ Dill Sauce",
      serving: "1 fillet (113g)",
      link: "https://www.eatthismuch.com/calories/baked-salmon-with-dill-905798"
    },
    {
      id: "GarlicRedBlissMashedPotato*1",
      name: "Garlic Red Bliss Mashed Potato",
      serving: "3 oz",
      link: "http://foodpro.unh.edu/label.asp?locationNum=30&locationName=&dtdate=11%2F11%2F2024&RecNumAndPort=803180%2A3"
    },
    {
      id: "PotatoHotDogRoll*1",
      name: "Potato Hot Dog Roll",
      serving: "1 bun (53g)",
      link: "https://www.nutritionix.com/food/potato-hot-dog-buns"
    },
    {
      id: "RoastedChickenThighswithHotHoneyandLime*1",
      name: "Roasted Chicken Thighs with Hot Honey and Lime",
      serving: "3 pieces (100g)",
      link: "https://www.eatthismuch.com/calories/honey-garlic-chicken-thighs-94359"
    },
    {
      id: "SwedishMeatballs*1",
      name: "Swedish Meatballs",
      serving: "1 meatball (45g)",
      link: "https://www.nutritionix.com/i/nutritionix/swedish-meatballs-1-meatball/56742479c49ec1f678c567e3"
    },
    {
      id: "CaramelizedButternutSquash*1",
      name: "Caramelized Butternut Squash",
      serving: "1 serving (181g)",
      link: "https://www.eatthismuch.com/calories/caramelized-butternut-squash-39210"
    },
    {
      id: "WideEggNoodles*1",
      name: "Wide Egg Noodles",
      serving: "1.25 cups",
      link: "https://www.muellerspasta.com/product/wide-egg-noodles/#:~:text=Nutritional%20Info,used%20for%20general%20nutrition%20advice."
    }
  ]
},

{
  campus: "Busch",
  meal: "Dinner",
  title: "Rotisserie",
  items: [
    { id: "705158*4", name: "Grilled Vegetables", serving: "4 OZ" },
    { id: "111310*5", name: "Rotisserie Peruvian Chicken", serving: "5 OZ" },
    {
      id: "BakedSweetPotato*1",
      name: "Baked Sweet Potato",
      serving: "1 medium (114g)",
      link: "https://www.nutritionix.com/food/baked-sweet-potato"
    }
  ]
},

{
  campus: "Busch",
  meal: "Dinner",
  title: "Pizza & Pasta",
  items: [
    { id: "157009*3", name: "Alfredo Sauce", serving: "3 OZ" },
    { id: "111319*1", name: "Grilled Chicken Montreal", serving: "1 EACH" },
    { id: "157169*4", name: "Marinara Sauce", serving: "4 OZ" },
    { id: "140149*4", name: "Penne Pasta", serving: "4 OZ" },
    { id: "111243*1", name: "Pepperoni Pizza", serving: "1 SLICE" },
    { id: "111098*1", name: "Round Cheese Pizza", serving: "1 SLICE" }
  ]
}
  

  


  
  


  // …etc…
]