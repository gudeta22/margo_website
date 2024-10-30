import React from "react";
import { FaTiktok, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import BackToTop from "./BackToTop";
import logo from "../assets/Photos/margo-footer.png"; // Adjust the path to your logo image

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div>
      <footer
        className="relative bgfooter w-full px-10 py-2"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-screen-xl text-white">
          <div className="grid grid-cols-1 gap-6 px-4 lg:py-3 py-5 md:grid-cols-3 lg:grid-cols-4">
            {/* Logo and Description */}
            <div className="flex flex-col items-start lg:items-center">
              <img
                src={logo}
                alt="Company Logo"
                className="w-48 h-auto lg:w-[12rem]"
              />
              
            </div>

            <div>
              <h2 className="mb-6 text-sm font-thin text-white uppercase lg:text-lg">
                Contacts
              </h2>
              <ul className="text-white font-thin md:text-sm lg:text-lg">
                <li className="mb-4">Phone: +251916909605</li>
                <li className="mb-4">Email: margomedicalpharmaplc@gmail.com</li>
                <li className="mb-4">Location: Addis Ababa, Ethiopia</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-thin text-white uppercase lg:text-lg">
                Our Products
              </h2>
              <ul className="text-white font-thin md:text-sm lg:text-lg">
                <li className="mb-4">Complete Blood Count (CBC)</li>
                <li className="mb-4">Chemistry Machine</li>
                <li className="mb-4">Hormone Analyzer</li>
                <li className="mb-4">Ultrasound</li>
                <li className="mb-4">Blood Gas Analyzer</li>
                <li className="mb-4">Patient Monitor</li>
                <li className="mb-4">Electrocardiogram (ECG)</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-thin text-white uppercase lg:text-lg">
                Services
              </h2>
              <ul className="text-white font-thin md:text-sm lg:text-lg">
                <li className="mb-4">Installation</li>
                <li className="mb-4">X-ray and IVD Maintenance (preventive and corrective)</li>
                <li className="mb-4">Decommissioning</li>
                <li className="mb-4">Software Update</li>
              </ul>
            </div>
          </div>

          <div className="bg-white lg:w-full lg:h-[0.1px]"></div>
          <div className="px-4 py-6 bg-transparent md:flex md:items-center md:space-x-16 my-6">
            <span className="text-sm text-white sm:text-center">
              <span>©{currentYear}</span>{" "}
              <a href="/ourcompany" className="text-white">
                MARGOMEDICALPHARMA™
              </a>
              . All Rights Reserved.
            </span>
           
          </div>
        </div>
        <BackToTop />
      </footer>
    </div>
  );
}

export default Footer;
