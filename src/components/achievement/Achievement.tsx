import AchievementCard from "./AchievementCard";

const achievements = [
    {
        title: "Laboratory Assistant of Web and Database Course at Hasanuddin University (2023)",
        items: [
            "Acted as an assistant, leading weekly teaching sessions for 15-20 lower-grade students.",
            "Delivered lessons on Laravel for the web development course and MySQL for the database course.",
        ],
    },
    {
        title: "Frontend Developer for NPE Project Manager (2023)",
        items: [
            "Managed projects at CV NPE Digital, utilizing Laravel as the primary framework.",
        ],
        delay: 0.1,
    },
    {
        title: "Movie App (Android) (2023)",
        items: [
            "Developed a Java-based movie library application for a class assignment.",
            "Incorporated features such as movie search, filtering, and the ability to create a personalized favorite movie list.",
        ],
        delay: 0.2,
    },
    {
        title: "Laboratory Assistant Coordinator of Algorithms and Programming (2024)",
        items: [
            "Managed a team of lab assistants and oversaw lab sessions.",
            "Organized and prepared teaching materials, assignments, and ensured lab activities ran smoothly.",
            "Led 9 students, providing guidance and support throughout the course.",
        ],
        delay: 0.3,
    },
    {
        title: "Recything (2024)",
        items: [
            "Developed RecyThing, a solution addressing waste management issues in Indonesia.",
            "Implemented a reporting feature for users to report waste conditions in their surroundings.",
            "Created recycling missions that award points and recognition for contributions to environmental preservation.",
        ],
        delay: 0.4,
    },
];

function Achievement() {
    return (
        <div id="achievement" className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
                <div className="text-center w-full">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                        Skills, Achievements & Other Experience
                    </h2>
                    <div className="space-y-8 w-full">
                        {achievements.map((achievement) => (
                            <AchievementCard
                                key={achievement.title}
                                title={achievement.title}
                                items={achievement.items}
                                delay={achievement.delay}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievement;
