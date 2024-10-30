import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import homebg from '../assets/Photos/homebg.jpg'; // Import your background image

function HomeComponent() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100); // Delay the animation slightly if needed
  }, []);
  const fadeInLeftStyle = {
    opacity: fadeIn ? 1 : 0,
    transform: fadeIn ? "translateX(0)" : "translateX(-100%)",
    transition: "all 1.5s ease-out",
  };
  return (
    <section className="">
      <div
        className="relative h-[45rem] lg:h-screen w-full overflow-hidden bg-fixed"
        style={{
          backgroundImage: `url(${homebg})`, // Correct way to set the background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Add a strong black overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Adjust opacity for the overlay as needed */}

        <div className="container m-auto relative z-10">
          <div className="px-4 absolute md:my-20 lg:my-32 my-16">
            <div
              className="w-full pt-[5rem] md:gap-6 flex flex-col gap-5"
              style={fadeInLeftStyle} // Applying the fade-in effect
            >
              <p className="text-white font-semibold inline-block uppercase relative font-rajdhani text-sm lg:text-xl md:text-lg fontstyle">
                MEDICAL RETAIL SERVICES
              </p>
              <div className="flex">
                <div className="bg-white relative opacity-50 lg:w-[269px] sm:w-[100px] w-32 h-[2px]"></div>
                <div className="bg-blue-500 w-[70px] absolute z-10 h-[2px]"></div>
              </div>
              <h1 className="text-white text-[32px] md:text-8xl lg:text-6xl font-thin fontstyle leading-tight uppercase">
                Driven by
                <br />
                Compassion & Care
              </h1>
              <p className="text-gray-200 lg:text-xl md:text-lg text-md font-thin lg:my-5">
                Innovating solutions that enhance well-being and promote a healthier tomorrow.
              </p>
            </div>
            <div className="w-full md:w-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeComponent;
