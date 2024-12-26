import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import ArtGallery from "./Pages/ArtGallery"
import { Route, Routes } from "react-router-dom"


const App = () => {
  return (

    <div className="px-4 sm:px[5vw] md:px-[7vw] lg:px-[9vw]">
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/services" element={Services} />
        <Route path="/contact" element={Contact} />
        <Route path="/art-gallery" element={ArtGallery} />
      </Routes>
    </div>
  )
}

export default App 