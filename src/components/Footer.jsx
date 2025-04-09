// Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Modern Interia</h3>
                        <p className="text-gray-400 mb-4">
                            Transforming spaces into extraordinary experiences with innovative design solutions.
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
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                                    Residential Design
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                                    Commercial Design
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                                    Renovation
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                                    Consultation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">
                                <span className="text-xl mr-2">📍</span>
                                Wagle Estate Thane (West)
                            </li>
                            <li className="text-gray-400">
                                <span className="text-xl mr-2">📞</span>
                                +91 76176 32569
                            </li>
                            <li className="text-gray-400">
                                <span className="text-xl mr-2">✉️</span>
                                moderninteria2004@gmail.com
                            </li>
                            <li className="text-gray-400">
                                {/* <span className="text-xl mr-2">⏰</span> */}
                                {/* Mon-Fri: 9:00 AM - 6:00 PM */}
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