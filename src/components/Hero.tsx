import { motion } from "motion/react";
import profilePhoto from "../assets/profile.jpg";
function Hero() {
    const contentVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row justify-between items-center w-full">
                {/* Left Content */}
                <motion.div
                    className="text-center lg:text-left w-full lg:w-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={contentVariants}
                >
                    <div className="card bg-base-100 shadow-xl p-6 rounded-lg">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            <span className="text-white">Creating web</span>{" "}
                            <span className="text-white">and mobile</span>{" "}
                            <span className="text-purple-700">solutions.</span>
                        </h1>
                        <p className="text-gray-400 mb-6 text-base md:text-lg">
                            I’m passionate about creating user-friendly
                            interfaces using React.js for web and Flutter for
                            mobile apps.
                        </p>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="w-full lg:w-1/2 h-full overflow-hidden flex justify-end"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    variants={imageVariants}
                >
                    <img
                        src={profilePhoto}
                        alt="Profile"
                        className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105 rounded-lg shadow-lg max-w-md"
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
