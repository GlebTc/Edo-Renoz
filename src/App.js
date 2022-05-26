import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


import About from './components/pages/About'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import './sass/main.scss';

function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<About />} />       
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
