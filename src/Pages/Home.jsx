import AboutSection from "../components/about";
import Hero from "../components/Hero"
import Stats from "../components/stats";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <AboutSection />
            <Stats />
        </div>
    );
}

export default Home