import React, { useEffect } from "react";
import productbg from '../assets/Photos/missionimg.jpg'; // Ensure this path is correct

function NavService() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      className="relative w-full h-40 lg:h-[20rem] px-10 lg:px-20 py-32 flex justify-center items-center bg-fixed"
      style={{
        backgroundImage: `url(${productbg})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-70" /> 

      {/* Text Content */}
      <div className="w-full max-w-4xl mx-auto flex justify-center items-center flex-col text-center relative z-10 space-y-5">
        {/* Heading */}
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold">
          Our Company
        </h1>

        {/* Subheading / Description */}
        <p className="poppins font-light text-white text-sm md:text-lg lg:text-xl leading-relaxed max-w-3xl">
        we specialize in providing high-quality medical products and equipment to enhance health and well-being. Our commitment to reliability and customer 
        satisfaction ensures that individuals and healthcare providers have access to the essential tools they need for optimal care."
        </p>
      </div>
    </div>
  );
}

export default NavService;
