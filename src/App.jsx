import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import Contact from "./Pages/Contact.jsx";
// import Portfolio from "./Pages/Portfolio.jsx";
import ArtGallery from "./Pages/ArtGallery.jsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/portfolio" element={<Portfolio />} /> */}
                    <Route path="/art-gallery" element={<ArtGallery />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
