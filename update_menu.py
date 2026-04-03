import json

data = {
  "menuItems": [
    {
      "id": 1,
      "category": "Signature Coffee",
      "categoryIcon": "☕",
      "name": "Iced Spanish Latte",
      "description": "Our best-selling sweet and creamy espresso blend over ice.",
      "price": "₱180",
      "image": "https://images.unsplash.com/photo-1461023058943-07cb14ca81cb?w=600&q=80",
      "vibe": "caffeinated"
    },
    {
      "id": 2,
      "category": "Heavy Meals",
      "categoryIcon": "🥩",
      "name": "Angus Ribeye Salpicao",
      "description": "Premium 200g ribeye cubes with toasted garlic, served with truffle mushroom rice.",
      "price": "₱480",
      "image": "https://images.unsplash.com/photo-1544025162-811110db32e0?w=600&q=80",
      "vibe": "filling"
    },
    {
      "id": 3,
      "category": "Heavy Meals",
      "categoryIcon": "🍝",
      "name": "Truffle Mushroom Pasta",
      "description": "Fettuccine loaded with shiitake mushrooms, rich truffle cream, and parmesan cheese.",
      "price": "₱350",
      "image": "https://images.unsplash.com/photo-1627914945398-e7e8ea1bd381?w=600&q=80",
      "vibe": "comforting"
    },
    {
      "id": 4,
      "category": "Pastries",
      "categoryIcon": "🥐",
      "name": "Almond Croissant",
      "description": "Flaky, buttery, double-baked croissant filled and topped with sweet almond frangipane.",
      "price": "₱150",
      "image": "https://images.unsplash.com/photo-1628198754593-01869e5d326f?w=600&q=80",
      "vibe": "sweet"
    },
    {
      "id": 5,
      "category": "Pastries",
      "categoryIcon": "🍰",
      "name": "Burnt Basque Cheesecake",
      "description": "Caramelized perfection on the outside, creamy and molten on the inside.",
      "price": "₱220",
      "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80",
      "vibe": "indulgent"
    },
    {
      "id": 6,
      "category": "Non-Coffee",
      "categoryIcon": "🍵",
      "name": "Premium Matcha Latte",
      "description": "Ceremonial grade Uji matcha whisked to perfection with oat milk.",
      "price": "₱190",
      "image": "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600&q=80",
      "vibe": "zen"
    },
    {
      "id": 7,
      "category": "Signature Coffee",
      "categoryIcon": "🧊",
      "name": "Cold Brew Classic",
      "description": "Steeped for 24 hours, incredibly smooth, low acidity, high caffeine.",
      "price": "₱170",
      "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
      "vibe": "refreshing"
    },
    {
      "id": 8,
      "category": "Heavy Meals",
      "categoryIcon": "🍛",
      "name": "Crispy Pork Belly Kare-Kare",
      "description": "Deep-fried pork belly on a rich peanut stew with fresh organic vegetables and bagoong.",
      "price": "₱420",
      "image": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&q=80",
      "vibe": "savory"
    }
  ],
  "peakHours": [
    { "time": "6 AM", "density": 15, "recommendation": "Best Time" },
    { "time": "8 AM", "density": 65, "recommendation": "Busy" },
    { "time": "10 AM", "density": 45, "recommendation": "Moderate" },
    { "time": "12 PM", "density": 80, "recommendation": "Peak Lunch" },
    { "time": "2 PM", "density": 35, "recommendation": "Relaxed" },
    { "time": "4 PM", "density": 50, "recommendation": "Afternoon Rush" },
    { "time": "6 PM", "density": 75, "recommendation": "Dinner Rush" },
    { "time": "8 PM", "density": 40, "recommendation": "Calm Evening" }
  ],
  "vibes": [
    { "status": "Lively & Social", "wait": "15m", "crowd": "Bustling", "emoji": "🎉" },
    { "status": "Relaxed & Cozy", "wait": "8m", "crowd": "Comfortable", "emoji": "☕" }
  ]
}

with open("g:/All vs projects/idk/our-cafe-demo/data/menu.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
