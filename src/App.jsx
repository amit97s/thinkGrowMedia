import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import Home from "./pages/Home";
import About from "./pages/About";
import PortfolioPages from "./pages/PortfolioPages";
import Blog from "./pages/Blog";
import Content from "./pages/Content";
import Website from "./pages/Website";
import Ads from "./pages/Ads";
import SEO from "./pages/SEO";
import Contact from "./pages/Contact";
// import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />



        {/* /////////////////////////////////////////////////////////////////////////////////// */}
        <Route path="/content" element={<Content />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/sites" element={<Website />} />
        <Route path="/ads" element={<Ads />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
