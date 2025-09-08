
import './App.css'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Navbar from './Navbar';
import Aboutpage from './pages/aboutpage';
import ScrollToTop from './ScrollToTop';
import GalleryPage from './pages/GallerPage';
import Footer from './Footer';
import Contact from './pages/Contact';
import Interior from './pages/Interior';
import Commercial from './pages/Commercial';
import Residential from './pages/Residential';
import Blog from './pages/Blog';


function App() {

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <ScrollToTop/>
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<Aboutpage/>}/>
     <Route path="/gallery" element={<GalleryPage/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/interior" element={<Interior/>}/>
     <Route path="/commercial" element={<Commercial/>}/>
     <Route path="/residential" element={<Residential/>}/>
     <Route path="/blog" element={<Blog/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
