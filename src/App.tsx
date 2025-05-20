import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/contact/Contact";
import Achievement from "./components/achievement/Achievement";
import Footer from "./components/Footer";
import Education from "./components/education/Education";

function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Education />
            <Achievement />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
