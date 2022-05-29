import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Home from './components/pages/Home.tsx';
import About from './components/pages/About.tsx';
import Services from './components/pages/Services.tsx';
import Gallery from './components/pages/Gallery.tsx';
import Contact from './components/pages/Contact.tsx';
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";

import './sass/main.scss';

function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/gallery" element={<Gallery />} />  
          <Route exact path="/contact" element={<Contact />} />           
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
