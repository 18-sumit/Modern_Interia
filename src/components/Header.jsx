import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assests";

const Header = () => {
    // State to toggle mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2">
                            <img 
                                src={assets.Logo} 
                                alt="Modern Interia Logo" 
                                className="h-12 w-auto"
                            />
                            <div className="text-2xl font-bold">
                                <span className="text-gray-900">Modern</span>
                                <span className="text-secondary block">Interia</span>
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Hamburger Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            aria-label="Toggle Navigation"
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
                            <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
                            <span className="block w-6 h-0.5 bg-gray-700"></span>
                        </button>
                    </div>

                    {/* Menu Section (Desktop) */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-gray-700 hover:text-secondary px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    isActive ? "text-secondary border-b-2 border-secondary" : ""
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `text-gray-700 hover:text-secondary px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    isActive ? "text-secondary border-b-2 border-secondary" : ""
                                }`
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/art-gallery"
                            className={({ isActive }) =>
                                `text-gray-700 hover:text-secondary px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    isActive ? "text-secondary border-b-2 border-secondary" : ""
                                }`
                            }
                        >
                            Art Gallery
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `text-gray-700 hover:text-secondary px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    isActive ? "text-secondary border-b-2 border-secondary" : ""
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `text-gray-700 hover:text-secondary px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    isActive ? "text-secondary border-b-2 border-secondary" : ""
                                }`
                            }
                        >
                            About Us
                        </NavLink>
                        <button className="bg-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-secondary/90 transition-colors duration-200 shadow-md hover:shadow-lg">
                            Book a call
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Section */}
            <div
                className={`md:hidden ${
                    isMenuOpen ? "block" : "hidden"
                } absolute top-0 left-0 w-full bg-white shadow-lg`}
            >
                <div className="px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <img 
                                src={assets.Logo} 
                                alt="Modern Interia Logo" 
                                className="h-10 w-auto"
                            />
                            <div className="text-xl font-bold text-gray-900">
                                <span className="text-secondary">Menu</span>
                            </div>
                        </div>
                        <button
                            onClick={toggleMenu}
                            aria-label="Close Menu"
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            <span className="text-3xl">&times;</span>
                        </button>
                    </div>

                    <div className="mt-6 space-y-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `block text-gray-700 hover:text-secondary py-2 text-base font-medium transition-colors duration-200 ${
                                    isActive ? "text-secondary" : ""
                                }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `block text-gray-700 hover:text-secondary py-2 text-base font-medium transition-colors duration-200 ${
                                    isActive ? "text-secondary" : ""
                                }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/art-gallery"
                            className={({ isActive }) =>
                                `block text-gray-700 hover:text-secondary py-2 text-base font-medium transition-colors duration-200 ${
                                    isActive ? "text-secondary" : ""
                                }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Art Gallery
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `block text-gray-700 hover:text-secondary py-2 text-base font-medium transition-colors duration-200 ${
                                    isActive ? "text-secondary" : ""
                                }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </NavLink>
                        <button className="w-full bg-secondary text-white px-6 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors duration-200 shadow-md hover:shadow-lg">
                            Book a call
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
