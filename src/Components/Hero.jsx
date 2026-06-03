export default function Hero() {
  return (
    <div>
      <section
        id="home"
        className="relative h-screen flex items-center justify-start bg-cover bg-center px-6 md:px-20"
        style={{
          backgroundImage:
            "url('https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/40"></div>

        <div className="relative text-left text-white max-w-2xl z-10 space-y-6 pt-24 md:pt-20">
          <p className="text-orange-400 uppercase tracking-[4px] mb-4 font-semibold">
            Premium Restaurant Experience
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Experience Fine Dining
          </h1>
          <p className="text-base md:text-xl text-gray-200 font-light leading-relaxed max-w-lg">
            Indulge in our exquisite culinary creations crafted with passion and
            the finest ingredients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#reservation"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3.5 rounded-full shadow-lg transition-all text-base text-center"
            >
              Book a Table
            </a>

            <a
              href="#menu"
              className="inline-block border-2 border-white hover:bg-white hover:text-black text-white font-medium px-8 py-3.5 rounded-full shadow-lg transition-all text-base text-center"
            >
              Explore Menu
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-10 mt-10 text-white">
            <div>
              <h2 className="text-3xl font-bold">10+</h2>
              <p className="text-gray-300">Years Experience</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">50+</h2>
              <p className="text-gray-300">Premium Dishes</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">5000+</h2>
              <p className="text-gray-300">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
