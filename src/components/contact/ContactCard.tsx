import { motion } from "motion/react";
import type { JSX } from "react";
import contactVariants from "./ContactVariants";

export type ContactItem = {
    icon: JSX.Element;
    label: string;
    value: string;
    href: string;
};

type ContactCardProps = {
    item: ContactItem;
    idx: number;
};

function ContactCard({ item, idx }: ContactCardProps) {
    return (
        <motion.div
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-72"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={contactVariants}
            transition={{ delay: 0.1 * (idx + 1) }}
        >
            <div className="mb-3">{item.icon}</div>
            <div className="font-semibold text-gray-800 mb-1">{item.label}</div>
            <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                    item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                }
                className="text-gray-700 hover:text-purple-600 break-all"
            >
                {item.value}
            </a>
        </motion.div>
    );
}
export default ContactCard;
