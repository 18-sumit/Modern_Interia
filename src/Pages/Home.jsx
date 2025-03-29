import AboutSection from "../components/about";
import Hero from "../components/Hero"
import Stats from "../components/stats";

const Home = () => {
    return (
        <div>
// component of hero 
            <Hero />
            <AboutSection />
            <Stats />
        </div>
    );
}

export default Home