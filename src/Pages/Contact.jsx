import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "residential"
    });
    const [copySuccess, setCopySuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const openWhatsApp = () => {
        const phoneNumber = "+91 76176 32569"; // Remove any non-numeric characters
        const message = "Hello! I'm interested in your interior design services.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
                        >
                            Get in Touch
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-gray-200 max-w-2xl mx-auto"
                        >
                            Let&apos;s discuss how we can transform your space into something extraordinary
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                    {/* Contact Information */}
                    <motion.div className="space-y-6 sm:space-y-8">
                        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900 mb-1">Our Location</h4>
                                        <p className="text-gray-600">Wagle Estate</p>
                                        <p className="text-gray-600">Thane (West) 400604</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">📞</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900 mb-1">Phone Number</h4>
                                        <div className="flex items-center space-x-2">
                                            <p className="text-gray-600">+91 76176 32569</p>
                                            <button
                                                onClick={openWhatsApp}
                                                className="text-secondary hover:text-secondary/80 transition-colors"
                                                title="Chat on WhatsApp"
                                            >
                                                <span className="text-xl">💬</span>
                                            </button>
                                        </div>
                                        <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">✉️</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900 mb-1">Email Address</h4>
                                        <div className="flex items-center space-x-2">
                                            <p className="text-gray-600">moderninteria2004@gmail.com</p>
                                            <button
                                                onClick={() => copyToClipboard("info@moderninteria.com")}
                                                className="text-secondary hover:text-secondary/80 transition-colors"
                                                title="Copy email address"
                                            >
                                                <span className="text-xl">📋</span>
                                            </button>
                                        </div>
                                        {copySuccess && (
                                            <p className="text-sm text-green-600 mt-1">Email copied to clipboard!</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Follow Us</h3>
                            <div className="flex space-x-6">
                                <a href="#" className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-gray-700 hover:text-secondary hover:bg-secondary/20 transition-colors duration-200">
                                    <span className="text-2xl">📱</span>
                                </a>
                                <a href="#" className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-gray-700 hover:text-secondary hover:bg-secondary/20 transition-colors duration-200">
                                    <span className="text-2xl">📸</span>
                                </a>
                                <a href="#" className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-gray-700 hover:text-secondary hover:bg-secondary/20 transition-colors duration-200">
                                    <span className="text-2xl">💼</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors duration-200"
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors duration-200"
                                    required
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors duration-200"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                                    Service Interest
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors duration-200"
                                >
                                    <option value="residential">Residential Design</option>
                                    <option value="commercial">Commercial Design</option>
                                    <option value="renovation">Renovation</option>
                                    <option value="consultation">Consultation</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors duration-200"
                                    required
                                    placeholder="Tell us about your project"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;