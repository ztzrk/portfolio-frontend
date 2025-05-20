import EducationCard from "./EducationCard";

function Education() {
    const educations = [
        {
            title: "Universitas Hasanuddin - Makassar, Indonesia",
            period: "Aug 2021 - Oct 2025",
            degree: "Bachelor of Information System, 3.64/4.00",
            details: [
                "Currently learning web development with a focus on Laravel and React.js.",
                "Gaining proficiency in Android app development using Java.",
                "Exploring management concepts to broaden skillset.",
            ],
            delay: 0,
        },
        {
            title: "Alterra Academy - Malang, Indonesia",
            period: "Feb 2024 - Jul 2024",
            degree: "Certificate in Mobile Engineer with Flutter",
            details: [
                "Developed mobile applications using Flutter in an intensive program covering software engineering fundamentals, algorithms, and deployment.",
                "Worked in a multi-disciplinary team to create a final project, collaborating with Backend, Frontend, UI/UX, and Quality Engineers.",
                "Participated in live mentoring sessions and workshops to enhance technical and professional skills.",
            ],
            delay: 0.2,
        },
    ];

    return (
        <div id="education" className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
                <div className="text-center w-full">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                        Education Level
                    </h2>
                    <div className="space-y-8 w-full">
                        {educations.map((edu, idx) => (
                            <EducationCard key={idx} {...edu} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
