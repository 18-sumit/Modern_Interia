// Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="text-2xl font-bold">
                            <p>Modern</p>
                            <p className="text-secondary">Interia</p>
                        </div>
                        <p className="text-gray-400">
                            Creating timeless interiors that reflect your unique style and enhance your living spaces.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="text-2xl">📱</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="text-2xl">📸</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="text-2xl">💼</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/art-gallery" className="text-gray-400 hover:text-white transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Residential Design
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Commercial Design
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Renovation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Space Planning
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-2xl mr-2">📍</span>
                                <span className="text-gray-400">
                                    123 Design Street<br />
                                    New York, NY 10001
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-2xl mr-2">📞</span>
                                <span className="text-gray-400">
                                    +1 (555) 123-4567<br />
                                    Mon-Fri: 9:00 AM - 6:00 PM
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-2xl mr-2">✉️</span>
                                <span className="text-gray-400">
                                    info@moderninteria.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Modern Interia. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;