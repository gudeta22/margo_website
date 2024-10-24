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
          className="flex flex-col justify-center gap-8 w-full md:w-1/2 transform-start"
          ref={el => el && elementsRef.current.push(el)} // Use ref for this section
        >
          <span className="flex items-center lg:text-4xl">
            <p className="uppercase font-thin fontstyle text-blue-400">Our Mission</p>
          </span>
          <h2 className="text-[#1d2434] font-extrabold text-[24px] md:text-[28px] lg:text-2xl">
            Leading Pharmaceutical Product Supply
          </h2>
          <p className="poppins font-normal text-[#686868] text-base md:text-lg lg:text-xl">
            At Margo Medical Pharma PLC, we are dedicated to providing a comprehensive range of pharmaceutical products to meet the needs of healthcare professionals and institutions. Our commitment to quality and excellence ensures that our partners receive only the best products available in the market.
          </p>
        </div>

        <div className="flex w-full md:w-1/2 relative">
          <div className="relative w-full lg:w-[32rem] transform-start">
            <div className=" rounded-lg  shadow-2xl shadow-blue-400 overflow-hidden"> {/* Frame styling */}
              <img src={missionimg} className="object-cover w-fit h-fit" alt="Home Background" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
