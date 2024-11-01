// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Product from './Pages/Product';
import OurCompany from './Pages/OurCompany';
import Contact from './Pages/Contact.jsx';
import Home from './Pages/Home.jsx';
import Services from './Pages/Services.jsx';
import Footer from './Components/Footer.jsx';
import NotFound from './Pages/NotFound'; // Import NotFound component
import loadingLogo from './assets/Photos/margo-01.png'; // Adjust the path as needed

function App() {
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.75) {
          el.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer); // Cleanup the timer
    };
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-circle">
          <img src={loadingLogo} alt="Loading..." />
        </div>
      </div>
    ); // Loader component with image
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourcompany" element={<OurCompany />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Catch all unmatched routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
