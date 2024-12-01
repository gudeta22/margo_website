import React, { useEffect, useRef } from "react";
import Home from '../assets/Photos/home.jpeg'


function OurCompanyComponent() {
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

    // Observe each element
    elementsRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      // Cleanup: Unobserve all elements
      elementsRef.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-12 lg:my-24">
      <div className="flex flex-col md:flex-row gap-10 py-10 items-center scroll-animation">
        
        {/* Text Section */}
        <div
          className="flex flex-col justify-center gap-6 w-full md:w-1/2 transform-start"
          ref={(el) => {
            if (el) elementsRef.current[0] = el;
          }}
        >
          <span className="text-lg lg:text-2xl text-blue-600 uppercase font-light poppins fontstyle tracking-wider">
            Our Company
          </span>
          <h2 className="text-2xl md:text-3xl poppins fontstyle  lg:text-3xl font-semibold text-gray-800">
            Committed to Excellence
          </h2>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
            At Margo Pharmaceutical Company, we are dedicated to delivering high-quality pharmaceutical products and services. Our expertise ensures that our clients receive the best solutions available in the healthcare industry.
            <br /><br />
            We specialize in providing diagnostic and examination equipment, along with essential medical supplies. Our commitment to safety and quality guarantees that every product meets stringent standards.
            <br /><br />
            We strive to continuously improve and adapt, aiming to be a trusted partner in healthcare, delivering excellence and ensuring customer satisfaction.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="flex w-full md:w-1/2"
          ref={(el) => {
            if (el) elementsRef.current[1] = el;
          }}
        >
          <div className="w-full lg:w-[30rem] lg:h-[20rem]   rounded-lg shadow-lg overflow-hidden">
            <img src={Home} className="object-cover w-full h-auto lg:h-[20rem]" alt="Our Company" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCompanyComponent;
