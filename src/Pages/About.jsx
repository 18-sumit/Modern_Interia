import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
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
                            Our Story
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-gray-200 max-w-2xl mx-auto"
                        >
                            Crafting exceptional spaces with passion and precision
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                            alt="Our Team"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
                        <p className="text-lg text-gray-600">
                            At Modern Interia, we believe that every space tells a story. Our journey began with a simple vision: to transform ordinary spaces into extraordinary experiences. With years of expertise in interior design, we've helped countless clients bring their dreams to life.
                        </p>
                        <p className="text-lg text-gray-600">
                            Our team of passionate designers and craftsmen work together to create spaces that not only look beautiful but also feel comfortable and functional. We believe in the power of good design to enhance the way people live, work, and play.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold text-secondary mb-2">10+</h3>
                                <p className="text-gray-600">Years Experience</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-2xl font-bold text-secondary mb-2">500+</h3>
                                <p className="text-gray-600">Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-6 rounded-xl shadow-lg text-center"
                        >
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎨</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Creativity</h3>
                            <p className="text-gray-600">We push boundaries and think outside the box to create unique solutions.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white p-6 rounded-xl shadow-lg text-center"
                        >
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⭐</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
                            <p className="text-gray-600">We never compromise on quality, ensuring every detail meets our high standards.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-white p-6 rounded-xl shadow-lg text-center"
                        >
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
                            <p className="text-gray-600">We work closely with our clients to bring their vision to life.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 