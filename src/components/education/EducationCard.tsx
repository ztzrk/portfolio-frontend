import { motion } from "motion/react";

type EducationCardProps = {
    title: string;
    period: string;
    degree: string;
    details: string[];
    delay?: number;
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

function EducationCard({
    title,
    period,
    degree,
    details,
    delay = 0,
}: EducationCardProps) {
    return (
        <motion.div
            className="card bg-base-100 shadow-xl p-6 rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={cardVariants}
            transition={{ delay }}
        >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-200">
                {title}
            </h3>
            <p className="text-gray-500 italic mt-2">{period}</p>
            <p className="text-gray-300 mt-2">{degree}</p>
            <ul className="list-disc list-inside mt-4 text-gray-300">
                {details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </motion.div>
    );
}
export default EducationCard;
