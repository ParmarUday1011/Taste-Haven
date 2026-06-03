import {FaFacebookF, FaInstagram,FaLinkedin,FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <section id="footer" className="py-10 bg-[#F5E6CC]">
                <footer className="pt-10 pb-8 border-t border-neutral-200">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        {/* 4 Column Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-12">
                            {/* Column 1: Brand Info */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-neutral-900">
                                    Taste <span className="text-orange-500">Haven</span>
                                </h3>
                                <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
                                    Experience the finest culinary journey in the heart of the city.
                                </p>
                            </div>

                            {/* Column 2: Quick Links */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
                                    Quick Links
                                </h4>
                                <ul className="space-y-2 text-sm text-neutral-600">
                                    <li>
                                        <a
                                            href="#home"
                                            className="hover:text-orange-500 transition-colors"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#about"
                                            className="hover:text-orange-500 transition-colors"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#menu"
                                            className="hover:text-orange-500 transition-colors"
                                        >
                                            Menu
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#reservation"
                                            className="hover:text-orange-500 transition-colors"
                                        >
                                            Reservation
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#reviews"
                                            className="hover:text-orange-500 transition-colors"
                                        >
                                            Reviews
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 3: Contact Info */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
                                    Contact Info
                                </h4>
                                <ul className="space-y-2 text-sm text-neutral-600">
                                    <li>123 Main Street, Ahmedabad, Gujarat</li>
                                    <li>+91 98765 43210</li>
                                    <li>info@tastehaven.com</li>
                                </ul>
                            </div>

                            {/* Column 4: Socials & Newsletter */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
                                    Follow Us
                                </h4>

                                {/* Circular Social Icons */}
                                <div className="flex space-x-3">
                                    <a
                                        href="#"
                                        className="w-8 h-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center text-sm transition-colors"
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-8 h-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center text-sm transition-colors"
                                    >
                                        <FaTwitter />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-8 h-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center text-sm transition-colors"
                                    >
                                        <FaInstagram />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-8 h-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center text-sm transition-colors"
                                    >
                                        <FaLinkedin/>
                                    </a>
                                </div>

                                {/* Newsletter Input */}
                                <div className="pt-2">
                                    <h5 className="text-xs font-bold text-neutral-800 mb-2">
                                        Subscribe to newsletter
                                    </h5>
                                    <div className="flex items-center border border-neutral-300 rounded-lg overflow-hidden bg-white max-w-xs focus-within:border-orange-500">
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="px-3 py-2 text-sm w-full focus:outline-none bg-transparent"
                                        />
                                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm transition-colors flex items-center justify-center">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Copyright Text */}
                        <div className="border-t border-neutral-200/60 pt-8 text-center">
                            <p className="text-xs text-neutral-500">
                                © 2026 Taste Haven. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </section>
        </div>
    )
}
