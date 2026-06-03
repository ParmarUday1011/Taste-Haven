const menu_items = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: "₹299",
    desc: "Fresh mozzarella, basil & rich tomato sauce",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1bdKKaTySsc4t8ahzTXQIG87Ls_J8ph907w&s",
  },

  {
    id: 2,
    name: "Pepperoni Pizza",
    price: "₹299",
    desc: "Fresh mozzarella, basil & rich tomato sauce",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2f38jmDq8OZhG72KpH345LC9teABsdTXrqg&s",
  },

  {
    id: 3,
    name: "Farmhouse Pizza",
    price: "₹349",
    desc: "Loaded with fresh veggies and mozzarella cheese",
    image:
      "https://i.pinimg.com/736x/8f/a8/8e/8fa88e915dbf75ff1a8f07ac040c966a.jpg",
  },

  {
    id: 4,
    name: "Neapolitan Pizza",
    price: "₹399",
    desc: "Classic pepperoni with melted cheese",
    image:
      "https://cookinglsl.com/wp-content/uploads/2014/05/pizza2-1-of-1-.jpg",
  },

  {
    id: 5,
    name: "Veggie Supreme Pizza",
    price: "₹369",
    desc: "Capsicum, olives, onions & sweet corn",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlsp6Lb7ezlJQi8h79toD70SH2VlpoBud7ow&s",
  },

  {
    id: 6,
    name: "Classic Chicken Burger",
    price: "₹249",
    desc: "Grilled chicken patty with lettuce and mayo",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/d5bc5b32dd177f5f207cad66556a572b",
  },

  {
    id: 7,
    name: "Cheese Burger",
    price: "₹229",
    desc: "Juicy burger with cheddar cheese",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 8,
    name: "White Sauce Pasta",
    price: "₹289",
    desc: "Creamy Alfredo sauce with herbs and parmesan",
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2021/05/White-Sauce-Pasta-Step-12.jpg",
  },

  {
    id: 9,
    name: "Red Sauce Pasta",
    price: "₹269",
    desc: "Italian tomato sauce with garlic & herbs",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDt97PQSeTAZwRuehqKhGj1wUd7Uka2PZyw&s",
  },

  {
    id: 10,
    name: "Paneer Tikka",
    price: "₹349",
    desc: "Grilled cottage cheese with Indian spices",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIn_9pqQ0_V6rCaLiUjx-LRZsM3W0DF6Erg&s",
  },

  {
    id: 11,
    name: "Butter Chicken Biryani",
    price: "₹429",
    desc: "Creamy tomato curry with tender chicken",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwlv1ZABBjE5tWD5eCW-kBVl4e3f65Bz2BA&s",
  },

  {
    id: 12,
    name: "Chicken Biryani",
    price: "₹389",
    desc: "Aromatic basmati rice with spicy chicken",
    image:
      "https://kitchendiariesbyzubda.com/wp-content/uploads/2025/01/IMG_1705-min-scaled.jpeg",
  },

  {
    id: 13,
    name: "Veg Biryani",
    price: "₹299",
    desc: "Flavorful rice cooked with fresh vegetables",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 14,
    name: "Caesar Salad",
    price: "₹199",
    desc: "Crisp lettuce with parmesan and croutons",
    image:
      "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg"
  },

  {
    id: 15,
    name: "Greek Salad",
    price: "₹219",
    desc: "Fresh cucumber, olives & feta cheese",
    image:
      "https://www.simplyrecipes.com/thmb/0NrKQlJ691l6L9tZXpL06uOuWis=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Greek-Salad-LEAD-2-4601eff771fd4de38f9722e8cafc897a.jpg",
  },

  {
    id: 16,
    name: "French Fries",
    price: "₹149",
    desc: "Crispy golden potato fries",
    image:
      "https://images.themodernproper.com/production/posts/2022/Homemade-French-Fries_8.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1662474181&s=50bccc38a736ef0e0a6e261ad23378f4",
  },

  {
    id: 17,
    name: "Tandoori Chicken",
    price: "₹459",
    desc: "Spicy grilled chicken with smoky flavor",
    image:
      "https://www.tamingtwins.com/wp-content/uploads/2024/07/tandoor-chicken-10.jpg",
  },

  {
    id: 18,
    name: "Chocolate Lava Cake",
    price: "₹199",
    desc: "Warm chocolate cake with molten center",
    image:
      "https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&",
  },

  {
    id: 19,
    name: "Strawberry Milkshake",
    price: "₹179",
    desc: "Creamy strawberry shake with ice cream",
    image:
      "https://marleysmenu.com/wp-content/uploads/2021/05/Banana-Strawberry-Milkshake-Featured-Image.jpg",
  },

  {
    id: 20,
    name: "Cold Coffee",
    price: "₹159",
    desc: "Refreshing chilled coffee with cream",
    image:
      "https://beanlycoffee.com/cdn/shop/files/cold-coffee-1_c591d264-cbeb-4802-a976-af3f1bcb61ff.jpg?v=1737670831",
  },

  {
    id: 21,
    name: "Red Velvet Cake",
    price: "₹249",
    desc: "Soft creamy cake with rich red velvet flavor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNiYq2aJvr-9HQn1vSz-uixXPX3h7dgRBuw&s",
  },
]


export default function Menu() {
  return (
    <div>
      <section id="menu" className="py-20 bg-[#F5E6CC]">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          {/* heading */}
          <h2 className="text-3xl font-bold text-black text-center">Our Menu</h2>
          {/* heading underline */}
          <div className="w-40 h-1 bg-orange-500 mx-auto mt-4"></div>
          {/* menu grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {menu_items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  {/* Name + Price */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-black">
                      {item.name}
                    </h3>
                    <span className="text-orange-500 font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                  {/* Button */}
                  <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02]">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
