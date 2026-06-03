import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="fixed w-full bg-white/90 backdrop-blur-[100%] shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-1">
              <a
                href="#home"
                className="flex items-center space-x-1 cursor-pointer"
              >
                <h1 className="text-2xl lg:text-3xl font-bold tracking-wide">
                  Taste <span className="text-orange-500">Haven</span>
                </h1>
              </a>
            </div>
            {/* menu for big screens */}
            <div className="hidden lg:flex items-center space-x-5 text-sm">
              <a
                href="#home"
                className="text-neutral-700 hover:text-orange-500 transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-neutral-700 hover:text-orange-500 transition-all duration-300"
              >
                About
              </a>
              <a
                href="#menu"
                className="text-neutral-700 hover:text-orange-500 transition-all duration-300 "
              >
                Menu
              </a>
              <a
                href="#gallery"
                className="text-neutral-700 hover:text-orange-500 transition-all duration-300"
              >
                Gallery
              </a>
              <a
                href="#reservation"
                className="text-neutral-700 hover:text-orange-500 transition-all duration-300"
              >
                Reservation
              </a>
              <a
                href="#reviews"
                className="text-neutral-700 hover:text-orange-500 transition-all duration-300"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-neutral-700 hover:text-orange-500 transition-all duration-300"
              >
                Contact
              </a>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-md">
                Book Table
              </button>
            </div>

            {/* hamburger menu for small screens */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-700 hover:text-orange-700 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}

        <div
          className={`${isMenuOpen ? "block" : "hidden"} lg:hidden absolute top-16 left-0 w-full bg-white/90 backdrop-blur-xs transition-all duration-300`}
        >
          <div className="px-6 pt-4 pb-6 space-y-4 font-medium text-neutral-700 flex flex-col">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-black py-2 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-black py-2 transition-all duration-300"
            >
              About
            </a>
            <a
              href="#menu"
              onClick={() => setIsMenuOpen(false)}
              className="text-black py-2 transition-all duration-300"
            >
              Menu
            </a>
            <a
              href="#gallery"
              onClick={() => setIsMenuOpen(false)}
              className="text-black py-2 transition-all duration-300"
            >
              Gallery
            </a>
            <a
              href="#reservation"
              onClick={() => setIsMenuOpen(false)}
              className="text-black py-2 transition-all duration-300"
            >
              Reservation
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMenuOpen(false)}
              className="text-black py-2 transition-all duration-300"
            >
              Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-black py-2 transition-all duration-300"
            >
              Contact
            </a>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-md">
              Book Table
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
