import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    // State to toggle mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-white shadow-lg">
            <div className="container flex justify-between items-center py-4">
                {/* Logo Section */}
                <div className="text-xl flex items-center gap-2 font-bold uppercase">
                    <Link to="/">
                        <p>Modern</p>
                        <p className="text-secondary">Interia</p>
                    </Link>
                </div>

                {/* Mobile Hamburger Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle Navigation"
                        className="text-gray-700 focus:outline-none"
                    >
                        <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
                        <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
                        <span className="block w-6 h-0.5 bg-gray-700"></span>
                    </button>
                </div>

                {/* Menu Section (Desktop) */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6 text-gray-700">
                        <NavLink
                            to="/"
                            className="py-1 px-3 hover:text-secondary font-semibold hover:underline active:underline"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/services"
                            className="py-1 px-3 hover:text-secondary font-semibold hover:underline active:underline"
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/art-gallery"
                            className="py-1 px-3 hover:text-secondary font-semibold hover:underline active:underline"
                        >
                            Art Gallery
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="py-1 px-3 hover:text-secondary font-semibold hover:underline active:underline"
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/portfolio"
                            className="py-1 px-3 hover:text-secondary font-semibold hover:underline active:underline"
                        >
                            Portfolio
                        </NavLink>
                    </ul>
                </div>

                {/* Button Section (Desktop) */}
                <div className="hidden md:block">
                    <button className="bg-black text-gray-100 px-4 py-2 rounded-xl border-2 hover:bg-secondary font-semibold">
                        Book a call
                    </button>
                </div>
            </div>

            {/* Mobile Menu Section */}
            <div
                className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-0 left-0 w-full bg-white shadow-md py-6 px-6`}
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-700">Menu</h2>
                    {/* Close Button (X) */}
                    <button
                        onClick={toggleMenu}
                        aria-label="Close Menu"
                        className="text-gray-700 text-3xl"
                    >
                        &times; {/* The close 'X' character */}
                    </button>
                </div>

                <ul className="flex flex-col items-center gap-4 text-gray-700 mt-4">
                    <NavLink
                        to="/"
                        className="block py-1 text-center text-lg font-semibold hover:text-secondary hover:underline active:underline"
                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/services"
                        className="block py-1 text-center text-lg font-semibold hover:text-secondary hover:underline active:underline"
                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/art-gallery"
                        className="block py-1 text-center text-lg font-semibold hover:text-secondary hover:underline active:underline"
                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                    >
                        Art Gallery
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="block py-1 text-center text-lg font-semibold hover:text-secondary hover:underline active:underline"
                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/portfolio"
                        className="block py-1 text-center text-lg font-semibold hover:text-secondary hover:underline active:underline"
                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                    >
                        Portfolio
                    </NavLink>
                    <div className="pt-4">
                        <button className="bg-black text-gray-100 px-4 py-2 rounded-xl border-2 hover:bg-secondary font-semibold">
                            Book a call
                        </button>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
