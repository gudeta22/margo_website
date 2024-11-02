import React, { useEffect, useRef } from "react";
import missionimg from '../assets/Photos/missionimg.jpg';

function AboutComponent() {
  const elementsRef = useRef([]); // Store references to all elements we want to animate

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slideUp"); // Add the animation class
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    const currentElements = elementsRef.current;
    currentElements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });
    return () => {
      currentElements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <div className="container mx-auto px-4 lg:my-32">
      <div className="flex flex-col md:flex-row gap-6 py-16">
        <div
          className="flex flex-col justify-center gap-8 w-full md:w-1/2 transform-start scroll-animation"
          ref={(el) => el && elementsRef.current.push(el)} // Use ref for this section
        >
          <span className="text-center lg:text-start lg:text-2xl">
            <p className="uppercase font-thin text-center fontstyle text-blue-400">Our Mission</p>
          </span>
          <h2 className="poppins font-normal uppercase text-black text-base md:text-lg lg:text-2xl fontstyle">
            Medical Product Supply
          </h2>
          <p className="poppins font-normal text-[#686868] text-base md:text-lg lg:text-xl fontstyle">
            At Margo Medical Pharma PLC, we are dedicated to providing a comprehensive range of pharmaceutical products to meet the needs of healthcare professionals and institutions. Our commitment to quality and excellence ensures that our partners receive only the best products available in the market.
          </p>
        </div>

        <div className="flex w-full md:w-1/2 relative scroll-animation">
          <div className="relative w-full lg:w-fit h-full object-cover transform-start"> 
            <div className="rounded-lg shadow-2xl shadow-blue-400 overflow-hidden h-full"> {/* Frame styling */}
              <img src="https://t4.ftcdn.net/jpg/01/89/57/79/240_F_189577923_ANoSMIVLctEun9cy9WUafBnJ2YJvds9e.jpg" className="w-full h-full object-cover" alt="Home Background" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
