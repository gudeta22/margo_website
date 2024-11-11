import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import MapComponent from './MapComponent';
import emailjs from 'emailjs-com';

const ContactComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false); // State for popup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_so9ofwt', // Replace with your EmailJS Service ID
        'template_w6celtq', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '_jntU9hcJAzFmrcl0' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          setShowPopup(true); // Show popup on success
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow container mx-auto py-12 px-4 text-gray-800 my-10 bg-white shadow-lg rounded-lg"
    >
      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-xs text-center font-semibold"
            style={{ zIndex: 9999 }} // Ensuring the popup stays on top
          >
            Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900"
      >
        <div className="md:m-auto md:flex my-5 flex-col justify-center md:w-[620px] lg:my-10">
          <div className="flex items-center md:justify-center justify-center">
            <span className="poppins font-normal uppercase text-blue-500 text-base md:text-lg lg:text-2xl">
              Contact Us
            </span>
          </div>
          <h1 className="poppins font-thin text-gray-700 md:text-lg lg:text-2xl text-lg">
            Whether you have a question or just want to say hello, we’re here for you. Reach out to us anytime!
          </h1>
        </div>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-sm"
        >
          <div className="flex justify-start">
            <h2 className="poppins font-normal uppercase text-blue-600 text-base md:text-lg lg:text-2xl">Get in Touch</h2>
          </div>
          <ul className="space-y-4 lg:mx-10">
            <li className="flex items-center font-light text-gray-700 hover:text-blue-500 transition">
              <MdPhone className="mr-2 text-blue-500" />
              <span className="font-semibold">+251916909605</span>
            </li>
            <li className="flex items-center hover:text-blue-500 transition">
              <MdLocationOn className="mr-2 w-5 h-5 text-blue-500" />
              <span className="font-semibold">Genet Abriha Building, on the road from jackros to yerer, Addis Ababa</span>
            </li>
            <li className="flex items-center hover:text-blue-500 transition">
              <MdEmail className="mr-2 text-blue-500" />
              <span className="font-semibold">margomedicalpharmaplc@gmail.com</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6 p-6 bg-gray-100 rounded-lg shadow-sm"
        >
          <form onSubmit={sendEmail}>
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg w-full">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12"
      >
        <div className="flex justify-start">
          <h2 className="text-xl md:text-xl uppercase mb-4 font-light text-gray-700">Visit Us</h2>
        </div>
        <MapComponent />
      </motion.div>
    </motion.div>
  );
};

export default ContactComponent;
