import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    // State to toggle mobile menu visibility
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold">
                            <span>Modern</span>
                            <span className="text-secondary">Interia</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                        >
                            <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
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

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 space-y-2">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `block text-gray-700 hover:text-secondary py-2 text-base font-medium transition-colors duration-200 ${
                                    isActive ? "text-secondary" : ""
                                }`
                            }
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </NavLink>
                        <button className="w-full bg-secondary text-white px-6 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors duration-200 shadow-md hover:shadow-lg">
                            Book a call
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
