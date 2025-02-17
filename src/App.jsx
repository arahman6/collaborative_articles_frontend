import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import AppBar from "./components/AppBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <AppBar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
