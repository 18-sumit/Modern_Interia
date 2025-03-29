// AboutSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const AboutSection = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                            <img
                                src="/about-image.jpg"
                                alt="Interior Design"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-lg">
                            <p className="text-4xl font-bold">15+</p>
                            <p className="text-sm">Years of Experience</p>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Crafting Timeless Interiors
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We believe that great design has the power to transform spaces and enhance lives. 
                            Our team of experienced designers combines creativity with technical expertise to 
                            create interiors that are both beautiful and functional.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900">Our Approach</h3>
                                <p className="text-gray-600">
                                    We take a collaborative approach, working closely with our clients to 
                                    understand their vision and bring it to life.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-gray-900">Our Promise</h3>
                                <p className="text-gray-600">
                                    We promise to deliver exceptional quality and attention to detail in 
                                    every project we undertake.
                                </p>
                            </div>
                        </div>
                        <Link to="/about">
                            <button className="mt-8 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                                Learn More About Us
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;