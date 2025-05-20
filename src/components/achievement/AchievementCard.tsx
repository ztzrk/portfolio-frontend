import { motion } from "motion/react";

type AchievementCardProps = {
    title: string;
    items: string[];
    delay?: number;
};

function AchievementCard({ title, items, delay = 0 }: AchievementCardProps) {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };
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
            <ul className="list-disc list-inside mt-4 text-gray-400">
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </motion.div>
    );
}

export default AchievementCard;
