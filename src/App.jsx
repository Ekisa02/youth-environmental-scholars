// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { BlogProvider } from './context/BlogContext';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import PageTransition from './components/PageTransition.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import OurWorkPage from './pages/OurWorkPage.jsx';
import MembershipPage from './pages/MembershipPage.jsx';
import StructurePage from './pages/Structure.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  const location = useLocation();

  return (
    <BlogProvider>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/our-work" element={<PageTransition><OurWorkPage /></PageTransition>} />
            <Route path="/membership" element={<PageTransition><MembershipPage /></PageTransition>} />
            <Route path="/structure" element={<PageTransition><StructurePage /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </BlogProvider>
  );
}

export default App;