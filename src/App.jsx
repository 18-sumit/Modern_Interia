import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import ArtGallery from "./Pages/ArtGallery"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
// import Hero from "./components/Hero"


const App = () => {
  return (

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