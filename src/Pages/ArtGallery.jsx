import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from 'prop-types';
import { assets } from "../assets/assests";
import { Link } from "react-router-dom";
const projects = [
    {
        id: 1,
        title: "Modern Kitchen Design",
        category: "residential",
        image: assets.kitchen,
        description: "A sleek and functional kitchen design with premium finishes."
    },
    {
        id: 2,
        title: "Luxury Sofa Set",
        category: "residential",
        image: assets.sofaset,
        description: "Custom-designed sofa set for ultimate comfort and style."
    },
    {
        id: 3,
        title: "Professional Wall Painting",
        category: "residential",
        image: assets.wallpainter,
        description: "Expert wall painting services with premium quality materials."
    },
    {
        id: 4,
        title: "Custom Windows",
        category: "residential",
        image: assets.windows,
        description: "Elegant window designs that enhance natural lighting."
    },
    {
        id: 5,
        title: "Wood Grinding",
        category: "residential",
        image: assets.woodgrind,
        description: "Professional wood grinding services for perfect finishes."
    },
    {
        id: 6,
        title: "Welding Work",
        category: "commercial",
        image: assets.welding,
        description: "Expert welding services for structural integrity."
    }
];

const categories = ["all", "residential", "commercial"];

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <div className="aspect-w-4 aspect-h-3">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};

const ArtGallery = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Our Portfolio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Explore our collection of stunning interior design projects
                    </motion.p>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                                    activeCategory === category
                                        ? "bg-secondary text-white"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let&apos;s create something extraordinary together
                    </p>
                    {/* <button className="bg-secondary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors duration-200 shadow-md hover:shadow-lg">
                        Schedule a Consultation
                    </button> */}
                    <Link to = "/contact">
                    <button className="bg-secondary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors duration-200 shadow-md hover:shadow-lg">
                        Schedule a Consultation
                    </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ArtGallery;