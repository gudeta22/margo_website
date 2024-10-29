import React , {useEffect} from 'react';
import { motion } from 'framer-motion';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import MapComponent from './MapComponent';

const ContactComponent = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow container mx-auto py-12 px-4 text-black my-10" // Change text color to black
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        <div className="md:m-auto md:flex my-5 flex-col justify-center md:w-[620px] lg:my-10">
          <div className="flex items-center md:justify-center justify-center">
            <span className="poppins font-normal uppercase text-blue-400 text-base md:text-lg lg:text-2xl fontstyl">
              Contact Us
            </span>
          </div>
          <h1 className="poppins font-thin   text-gray-700  md:text-lg lg:text-2xl fontstyle text-lg">
            Whether you have a question or just want to say hello, we’re here for you. Reach out to us anytime!
          </h1>
        </div>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className='flex justify-start'>
            <h2 className="poppins font-normal uppercase text-black text-base md:text-lg lg:text-2xl fontstyle">Get in Touch</h2>
          </div>
          <ul className="space-y-4 lg:mx-10">
            <li className="flex items-center font-thin">
              <MdPhone className="mr-2" />
              <span className='font-bold fontstyle'>+251916909605</span>
            </li>
            <li className="flex items-center">
              <MdLocationOn className="mr-2 w-5 h-5" />
              <span className='font-bold fontstyle'>Genet Abriha Building, on the road from jackros to yerer, Addis Ababa</span>
            </li>
            <li className="flex items-center">
              <MdEmail className="mr-2" />
              <span className='font-bold fontstyle'>margomedicalpharmaplc@gmail.com</span>
            </li>
           
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-blue-500 rounded" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-blue-500 rounded" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full p-2 border border-blue-500 rounded" required></textarea>
          </div>
          <button type="button" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12"
      >
        <div className='flex justify-start'>
          <h2 className="text-xl md:text-xl uppercase mb-4 font-thin lg:text-2xl">Visit Us</h2>
        </div>
        <p className="text-base md:text-lg mb-4">
          Join us for our weekly services and events. We look forward to welcoming you!
        </p>
        <MapComponent />
      </motion.div>
    </motion.div>
  );
};

export default ContactComponent;
