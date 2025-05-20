import { useState, useCallback } from "react";
import type { ContactItem } from "./ContactCard";
import ContactCard from "./ContactCard";
import { motion } from "framer-motion";
import contactVariants from "./ContactVariants";
import { submitMessage } from "../../services/message";

const contactData: ContactItem[] = [
    {
        icon: (
            <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
            </svg>
        ),
        label: "Phone",
        value: "+62 851-5501-6433",
        href: "https://wa.me/6285155016433",
    },
    {
        icon: (
            <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
            </svg>
        ),
        label: "Email",
        value: "ralif877@gmail.com",
        href: "mailto:ralif877@gmail.com",
    },
    {
        icon: (
            <svg
                className="w-6 h-6 text-gray-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.868-3.063-1.867 0-2.155 1.458-2.155 2.963v5.704h-3v-11h2.879v1.503h.041c.401-.757 1.378-1.557 2.834-1.557 3.029 0 3.589 1.994 3.589 4.587v6.467z" />
            </svg>
        ),
        label: "LinkedIn",
        value: "LinkedIn Profile",
        href: "https://www.linkedin.com/in/ztzrk/",
    },
    {
        icon: (
            <svg
                className="w-6 h-6 text-gray-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
        label: "GitHub",
        value: "GitHub Profile",
        href: "https://github.com/ztzrk",
    },
];

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<{
        message: string;
        type: "success" | "error";
    } | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        },
        []
    );

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();
            setIsSubmitting(true);
            setStatus(null);

            try {
                const response = await submitMessage(formData);
                setStatus({ message: response.message, type: "success" });
                setFormData({ name: "", email: "", message: "" });
            } catch (error) {
                console.error("Error submitting contact form:", error);
                setStatus({
                    message:
                        error instanceof Error
                            ? error.message
                            : "An unexpected error occurred.",
                    type: "error",
                });
            } finally {
                setIsSubmitting(false);
            }
        },
        [formData]
    );

    return (
        <section
            id="contact"
            className="min-h-screen bg-base-200 py-16 px-4 sm:px-6 lg:px-8"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-7xl mx-auto">
                <h2
                    id="contact-heading"
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
                >
                    Contact Me
                </h2>
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={contactVariants}
                >
                    {/* Contact Form */}
                    <div className="card bg-base-100 shadow-xl p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="input input-bordered w-full mt-1"
                                    required
                                    aria-required="true"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="input input-bordered w-full mt-1"
                                    required
                                    aria-required="true"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="textarea textarea-bordered w-full mt-1 h-32"
                                    required
                                    aria-required="true"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                                disabled={isSubmitting}
                                aria-busy={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                        {status && (
                            <p
                                className={`mt-4 text-center ${
                                    status.type === "success"
                                        ? "text-success"
                                        : "text-error"
                                }`}
                                role="alert"
                            >
                                {status.message}
                            </p>
                        )}
                    </div>

                    {/* Contact Cards */}
                    <div className="flex flex-col justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactData.map((item, idx) => (
                                <ContactCard
                                    key={item.label}
                                    item={item}
                                    idx={idx}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;
