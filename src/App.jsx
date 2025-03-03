import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import AppAppBar from "./components/AppAppBar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import DetailContent from "./components/DetailContent"; // Create/Import your detail page
import cardData from "./api/articles"; // Array of articles
// import {articlesData} from "./api/articles"; // Array of articles
import SignUp from './pages/Signup';
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <AppAppBar />
      <Container maxWidth="lg" component="main" sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }} >
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/article/:id" element={<DetailContent />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
