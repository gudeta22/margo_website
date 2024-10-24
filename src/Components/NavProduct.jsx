import React, { useEffect } from "react";
import productbg from '../assets/Photos/missionimg.jpg'; // Ensure this path is correct

function NavProduct() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      className="relative w-full  h-10 lg:h-[20rem] px-20 py-32 flex justify-center bg-fixed"
      style={{
        backgroundImage: `url(${productbg})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80" /> {/* Overlay for opacity */}
      <div className="w-auto my-5 flex justify-center items-center flex-col text-center relative z-10">
        {/* Products Heading */}
        <div className="text-white text-lg lg:text-5xl md:text-5xl font-thin">
          <div className="fontstyle ">Products</div>
        </div>
        <p className="poppins font-light text-white text-sm md:text-lg lg:text-xl leading-relaxed max-w-3xl">
          Join us in our commitment to enhancing healthcare through quality pharmaceutical products and innovative solutions.
        </p>
      </div>
    </div>
  );
}

export default NavProduct;
