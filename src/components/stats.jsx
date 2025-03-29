// Stats.jsx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import PropTypes from 'prop-types';

const StatItem = ({ number, label, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay }}
            className="text-center"
        >
            <motion.div
                initial={{ number: 0 }}
                animate={isInView ? { number } : { number: 0 }}
                transition={{ duration: 2, delay }}
                className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2"
            >
                {Math.round(isInView ? number : 0)}+
            </motion.div>
            <p className="text-gray-600 text-lg">{label}</p>
        </motion.div>
    );
};

StatItem.propTypes = {
    number: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired
};

const Stats = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <StatItem number={150} label="Projects Completed" delay={0.2} />
                    <StatItem number={50} label="Happy Clients" delay={0.4} />
                    <StatItem number={15} label="Years Experience" delay={0.6} />
                    <StatItem number={25} label="Team Members" delay={0.8} />
                </div>
            </div>
        </section>
    );
};

export default Stats;