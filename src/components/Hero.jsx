// HeroSection.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="relative min-h-screen">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Hero Content */}
            <div className="relative min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                        >
                            Transform Your Space into a Masterpiece
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl"
                        >
                            Discover the perfect blend of style and functionality with our expert interior design services. We create spaces that inspire and delight.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/portfolio"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors duration-200"
                            >
                                View Our Work
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full p-2">
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;