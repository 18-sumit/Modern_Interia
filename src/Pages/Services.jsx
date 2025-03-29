import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const services = [
    {
        title: "Residential Design",
        description: "Transform your home into a personalized sanctuary that reflects your unique style and meets your everyday needs.",
        icon: "🏠"
    },
    {
        title: "Commercial Design",
        description: "Create inspiring workspaces that boost productivity and leave lasting impressions on clients and employees.",
        icon: "🏢"
    },
    {
        title: "Renovation",
        description: "Breathe new life into existing spaces with our comprehensive renovation services.",
        icon: "🔨"
    },
    {
        title: "Space Planning",
        description: "Optimize your space with expert layout planning and furniture arrangement.",
        icon: "📐"
    },
    {
        title: "Custom Furniture",
        description: "Design and create bespoke furniture pieces that perfectly fit your space and style.",
        icon: "🪑"
    },
    {
        title: "Lighting Design",
        description: "Enhance your space with carefully planned lighting that creates the perfect ambiance.",
        icon: "💡"
    }
];

const ServiceCard = ({ title, description, icon, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
};

const Services = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-20">
            {/* Hero Section */}
            <div className="text-center mb-16 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
                >
                    Our Services
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-gray-600 max-w-2xl mx-auto"
                >
                    Discover our comprehensive range of interior design services tailored to meet your needs
                </motion.p>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-16 px-4"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Ready to Transform Your Space?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Let&apos;s discuss how we can bring your vision to life with our expert design services.
                </p>
                <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Schedule a Consultation
                </button>
            </motion.div>
        </div>
    );
};

export default Services;