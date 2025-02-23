// import Container from '@mui/material/Container';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AppAppBar from "./components/AppAppBar";
// import MainContent from './components/MainContent';
// import Home from './pages/Home';
// import Footer from './components/Footer';
// import './App.css'
// import cardData from './api/articles';

// function App() {
//   return (
//     <Router>
//       <AppAppBar />
//       {/* <Hero /> */}
//       <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
//         {/* <Box sx={{ bgcolor: '#cfe8fc', height: '200vh' }} /> */}
//         <MainContent />
//         {/* <Latest /> */}
//       </Container>
//       {/* <Routes>
//         <Route path="/home" element={<Home />} />
//       </Routes> */}
//       <Footer />
//     </Router>
//   );
// }

// export default App;



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

function App() {
  return (
    <Router>
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <Routes>
          {/* Home/Main Route */}
          <Route path="/" element={<MainContent />} />
          {/* console.log(arti[0]); */}
          {/* Article Detail Route 
              - Pass cardData to DetailContent so it can find the clicked article */}
          {/* <Route path="/article/:id" element={<DetailContent articlesData={cardData} />} /> */}
          <Route path="/article/:id" element={<DetailContent />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
