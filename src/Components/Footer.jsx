import React from "react";
import { FaTiktok, FaYoutube, FaTelegramPlane } from "react-icons/fa"; // Import React Icons

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div>
      <footer
        className="relative bg-blue-400 w-full px-10 py-20"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-screen-xl text-white">
          <div className="grid grid-cols-1 gap-8 px-4 lg:py-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="md:sr-only flex flex-col grow-2 w-[8rem] justify-start">
              <div className="flex select-none">
                Logo {/* Placeholder for the logo */}
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-thin text-white uppercase dark:text-white fontstyle lg:text-lg">
                Contacts
              </h2>
              <ul className="text-white dark:text-white font-thin md:text-sm lg:text-lg">
                <li className="mb-4">Phone: +251-969137151</li>
                <li className="mb-4">PENIELCHURCH@gmail.com</li>
                <li className="mb-4">Addis Ababa, Ethiopia</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-thin text-white uppercase dark:text-white fontstyle lg:text-lg">
                Operating Hours
              </h2>
              <ul className="text-white dark:text-white font-thin md:text-sm lg:text-lg">
                <li className="mb-4">Sunday 5PM-8PM</li>
                <li className="mb-4">Wednesday 5PM</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-thin text-white uppercase dark:text-white fontstyle lg:text-lg">
                Services
              </h2>
              <ul className="text-white dark:text-white font-thin md:text-sm lg:text-lg">
                <li className="mb-4">Prayer</li>
                <li className="mb-4">Word Of God</li>
                <li className="mb-4">Worship</li>
                <li className="mb-4">Bible Studies</li>
              </ul>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row justify-between text-white">
              <div className="sr-only md:sr-only lg:not-sr-only flex flex-col grow lg:-my-10">
                <div className="flex mb-0 mx-20 items-end select-none my-7">
                  Logo {/* Placeholder for the logo */}
                </div>
                <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                  <a
                    href="https://www.tiktok.com/@penielchurchtv"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400"
                  >
                    <FaTiktok size={32} />
                    <span className="sr-only">TikTok</span>
                  </a>

                  <a
                    href="https://youtube.com/@penieltv-addis2025?si=EL26reQGscleg55T"
                    className="text-gray-400"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaYoutube size={32} />
                    <span className="sr-only">YouTube</span>
                  </a>

                  <a
                    href="https://t.me/Kinfegabriell"
                    className="text-gray-400"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTelegramPlane size={32} />
                    <span className="sr-only">Telegram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white lg:w-[100%] lg:h-[0.1px]"></div>
          <div className="px-4 py-6 bg-transparent md:flex md:items-center md:space-x-16 my-6">
            <span className="text-sm text-white sm:text-center">
              <span>©{currentYear}</span>{" "}
              <a href="/about" className="text-red-500">
                PENIELCHURCH™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 lg:sr-only md:not-sr-only space-x-6 sm:justify-center md:mt-0">
              <a
                href="https://www.tiktok.com/@penielchurchtv"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400"
              >
                <FaTiktok size={36} />
                <span className="sr-only">TikTok</span>
              </a>

              <a
                href="https://youtube.com/@penieltv-addis2025?si=EL26reQGscleg55T"
                className="text-gray-400"
              >
                <FaYoutube size={36} />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://t.me/Kinfegabriell"
                className="text-gray-400"
              >
                <FaTelegramPlane size={36} />
                <span className="sr-only">Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
