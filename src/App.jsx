import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import ArtGallery from "./Pages/ArtGallery";
// import Hero from "./components/Hero"

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {/* <Hero /> */}
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/art-gallery" element={<ArtGallery />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

<<<<<<< HEAD
export default App; 
=======


    <div className="px-4 sm:px[5vw] md:px-[7vw] lg:px-[9vw]">
      <Header />

      {/* <Hero /> */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/art-gallery" element={<ArtGallery />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App 
>>>>>>> 21ac25adfe2524d4b4697f83863081414e1fc486
