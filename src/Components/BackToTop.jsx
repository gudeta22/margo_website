// src/Components/BackToTop.jsx
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Import the icon

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false); // State to track button visibility

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show or hide button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 300) { // Adjust the threshold as needed
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);

  return (
    <>
      {showButton && (
        <button 
          onClick={scrollToTop} 
          className="back-to-top " // You can style this class
        >
          <FontAwesomeIcon icon={faChevronUp} /> {/* Display the icon */}
        </button>
      )}
    </>
  );
};

export default BackToTop;
