import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Aman Gupta",
    role: "Food Critic",
    review:
      "The ambiance was wonderful, and the dishes were cooked to perfection. A must-visit place for every foodie!",
    img: "https://plus.unsplash.com/premium_photo-1691030256264-59cdf9414ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Regular Customer",
    review:
      "Service was absolutely excellent. The staff is very polite, and the Mutton Biryani is highly recommended!",
    img: "https://plus.unsplash.com/premium_photo-1682089894837-e01e5cb8e471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxpbmRpYW4lMjBnaXJsfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Regular Customer",
    review:
      "The food is always delicious, and the service is prompt. I love coming here for dinner with my family!",
    img: "https://images.unsplash.com/photo-1694871420666-d55d3649ea40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div>
      <section id="reviews" className="py-20 bg-[#F5E6CC]">
        <div className="max-w-4xl mx-auto px-6 "></div>
        <h2 className="text-4xl font-bold text-neutral-900 mb-2 text-black text-center">
          Customer Reviews
        </h2>
        <div
          className="h-1 bg-orange-500 rounded-full mx-auto mt-4 w-20 sm:w-24 md:w-32 lg:w-40"
        ></div>
        <p className="text-neutral-600 mb-12 text-center text-lg mt-10 px-6 md:px-0 ">
          Hear what our customers have to say about their dining experience
        </p>

        <div className="max-w-3xl mx-auto md:px-10 sm:px-6 px-6">
          <div className="bg-[#fcf9f2] border border-neutral-200 p-8 md:p-10 rounded-3xl shadow-lg text-center transition-all duration-500">
            <img
              src={reviews[currentIndex].img}
              alt={reviews[currentIndex].name}
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-orange-500 shadow-md"
            />

            <p className="text-lg md:text-xl text-neutral-700 italic leading-relaxed mt-6">
              "{reviews[currentIndex].review}"
            </p>

            <h3 className="text-xl font-bold text-black mt-6">
              {reviews[currentIndex].name}
            </h3>

            <p className="text-orange-500 font-medium">
              {reviews[currentIndex].role}
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={handlePrev}
            className="bg-white text-neutral-800 border border-neutral-200 w-12 h-12 rounded-full hover:bg-neutral-50 hover:border-orange-500 hover:text-orange-500 shadow-sm flex items-center justify-center font-bold text-lg transition-all"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="bg-white text-neutral-800 border border-neutral-200 w-12 h-12 rounded-full hover:bg-neutral-50 hover:border-orange-500 hover:text-orange-500 shadow-sm flex items-center justify-center font-bold text-lg transition-all"
          >
            →
          </button>

          {/* <div className="flex justify-center space-x-2 mt-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full ${currentIndex === index ? "bg-orange-500" : "bg-gray-300"}`}
              />
            ))}
          </div> */}
        </div>
      </section>
    </div>
  );
}
