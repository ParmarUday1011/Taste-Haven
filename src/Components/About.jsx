import { FaLeaf, FaUserTie, FaUtensils, FaWineGlassAlt } from "react-icons/fa";

export default function About() {
    return (
        <div>
            <section className="py-20 bg-[#FFF8E7]" id="about">
                <div className="max-w-7xl mx-auto px-6 md:px-20">
                    {/* heading */}
                    <h2 className="text-3xl font-bold text-black text-center">About Taste Haven</h2>
                    {/* heading underline */}
                    <div className="w-70 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
                    {/* image and content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 text-left items-center">
                        <img src="https://platform.atlanta.eater.com/wp-content/uploads/sites/14/2026/01/Screenshot-2026-01-08-at-10.06.45%E2%80%AFAM.png?quality=90&strip=all&crop=21.973466003317,0,56.053067993367,100" alt="About Taste Haven"
                            className="rounded-lg shadow-lg w-full object-cover h-75 md:h-198 lg:h-160 xl:h-135" />
                            {/* content of about section */}
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">Welcome to Taste Haven</h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Welcome to Taste Haven, where culinary excellence meets an unforgettable dining experience. Our passion for creating exceptional dishes is reflected in every bite.
                            </p>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                With a team of talented chefs and a commitment to using only the finest ingredients, we strive to deliver an extraordinary meal that will leave you craving more.
                            </p>
                            {/* icon grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-16 pt-6">
                                <div className="flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
                                    <div className="bg-orange-500 text-white p-4 rounded-full shadow-md">
                                        <FaUtensils size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-neutral-900">Fine Dining</h4>
                                        <p className="text-sm text-neutral-500">
                                            Premium dining experience
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
                                    <div className="bg-orange-500 text-white p-4 rounded-full shadow-md">
                                        <FaWineGlassAlt size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-neutral-900">Luxury Ambience</h4>
                                        <p className="text-sm text-neutral-500">
                                            Elegant interiors and cozy dining
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
                                    <div className="bg-orange-500 text-white p-4 rounded-full shadow-md">
                                        <FaLeaf size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-neutral-900">Fresh Ingredients</h4>
                                        <p className="text-sm text-neutral-500">
                                            Organic and seasonal food
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
                                    <div className="bg-orange-500 text-white p-4 rounded-full shadow-md">
                                        <FaUserTie size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-neutral-900">Expert Chefs</h4>
                                        <p className="text-sm text-neutral-500">
                                            Professional culinary team
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
