import React, { useEffect, useState, useRef } from "react";
import homebg from '../assets/Photos/homebg.jpg'; // Import your background image
import { FaUserFriends, FaCheckCircle, FaAward } from "react-icons/fa"; // Import icons

function HomeComponent() {
  const [fadeIn, setFadeIn] = useState(false);
  const [happyClients, setHappyClients] = useState(0);
  const [projectsDone, setProjectsDone] = useState(0);
  const [installations, setInstallations] = useState(0);
  const statsRef = useRef(null); // Reference for the statistics section

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setFadeIn(true);
          countUp(setHappyClients, 80);
          countUp(setProjectsDone, 50);
          countUp(setInstallations, 80);
          observer.disconnect(); // Stop observing after the stats are shown
        }
      });
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const countUp = (setter, target) => {
    let count = 0;
    const increment = Math.ceil(target / 100); // Increment for smoother counting
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target; // Ensure we do not exceed the target
        clearInterval(interval);
      }
      setter(count);
    }, 20); // Adjust the speed of counting
  };

  // Modified to achieve a bottom-to-top animation
  const fadeInBottomStyle = {
    opacity: fadeIn ? 1 : 0,
    transform: fadeIn ? "translateY(0)" : "translateY(20px)", // From below
    transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
  };

  return (
    <section>
      <div
        className="relative h-[45rem] lg:h-screen w-full overflow-hidden bg-fixed"
        style={{
          backgroundImage: `url(${homebg})`, // Set the background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Add a strong black overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="container m-auto relative z-10 flex flex-col justify-start items-center h-full">
          <div className="px-4 my-20">
            <div
              className="w-full flex flex-col gap-3 md:gap-5"
              style={fadeInBottomStyle} // Applying the bottom-to-top fade-in effect
            >
            
              <h1 className="text-white text-[24px] sm:text-[32px] md:text-8xl lg:text-6xl font-thin fontstyle leading-tight uppercase text-center">
                Driven by
                <br />
                Compassion & Care
              </h1>
              <p className="text-gray-200 text-sm sm:text-md md:text-lg lg:text-xl font-thin lg:my-5 text-center">
                Innovating solutions that enhance well-being and promote a healthier tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div 
          ref={statsRef}
          className="absolute -my-4 bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 lg:my-20"
          style={{ opacity: fadeIn ? 1 : 0, transition: "opacity 0.5s ease-out" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 ">
            {/* Happy Clients */}
            <div className="flex flex-col items-center bg-blue-500 opacity-80 text-white py-4 sm:py-6 rounded-lg shadow-lg">
              <FaUserFriends size={24} className="sm:mb-4 mb-2" />
              <h3 className="text-base sm:text-xl font-semibold">Clients</h3>
              <p className="text-2xl sm:text-3xl font-bold mt-2">{happyClients}+</p>
            </div>

            {/* Projects Done */}
            <div className="flex flex-col items-center bg-blue-100 opacity-80 text-blue-600 py-4 sm:py-6 rounded-lg shadow-lg">
              <FaCheckCircle size={24} className="sm:mb-4 mb-2" />
              <h3 className="text-base sm:text-xl font-semibold">Projects Done</h3>
              <p className="text-2xl sm:text-3xl font-bold mt-2">{projectsDone}+</p>
            </div>

            {/* Number of Installations */}
            <div className="flex flex-col items-center bg-blue-500 opacity-80 text-white py-4 sm:py-6 rounded-lg shadow-lg">
              <FaAward size={24} className="sm:mb-4 mb-2" />
              <h3 className="text-base sm:text-xl font-semibold">Number of Installations</h3>
              <p className="text-2xl sm:text-3xl font-bold mt-2">{installations}+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeComponent;
