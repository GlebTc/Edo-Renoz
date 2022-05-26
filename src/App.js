import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Home from './components/pages/Home';
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer";

import './sass/main.scss';

function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />       
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
