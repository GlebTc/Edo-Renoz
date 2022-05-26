import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer";

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
