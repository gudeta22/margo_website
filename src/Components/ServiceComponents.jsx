import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faHeartbeat, faBriefcaseMedical, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    id: 1,
    title: 'Installation',
    description: [
      'Our installation service is dedicated to providing seamless integration of healthcare solutions tailored to meet your specific needs',
    ],
    icon: faTools, // Use an icon instead of an image
  },
  {
    id: 2,
    title: 'Maintenance',
    description: [
      'Our dedicated team innovates and develops new treatments.',
      'We aim to improve patient outcomes and quality of life.',
    ],
    icon: faHeartbeat,
  },
  {
    id: 3,
    title: 'Decommission',
    description: [
      'We provide efficient distribution of pharmaceutical products.',
      'Ensuring timely access to essential medications is our priority.',
    ],
    icon: faBriefcaseMedical,
  },
  {
    id: 4,
    title: 'Software Upgrade',
    description: [
      'We engage in community health programs promoting wellness.',
      'Our aim is to provide access to healthcare resources for underserved populations.',
    ],
    icon: faCloudUploadAlt,
  },
];

const ServiceComponents = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-12 px-4 my-10"
    >
      <div className="flex flex-col items-center text-center gap-4 py-7">
        <span className="flex items-center font-bold justify-center">
          <p className="text-black fontstyle font-thin lg:text-2xl uppercase">
            Services we provide
          </p>
        </span>

        <p className="text-black max-w-3xl text-xl font-thin">
          Join us in our commitment to enhancing healthcare through quality pharmaceutical products and innovative solutions. Together, we can improve lives and transform healthcare systems globally.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 scroll-animation">
        {data.map((item, index) => (
          <InvolvementCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}  // Pass the array directly
            delay={index * 0.2}
          />
        ))}
      </div>
    </motion.div>
  );
};

const InvolvementCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: delay }}
    className="bg-white rounded-lg shadow-lg text-black text-center p-5 transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-xl"
  >
    {/* Icon */}
    <div className="mb-4">
      <FontAwesomeIcon icon={icon} className="text-4xl text-blue-500" />
    </div>
    <span className='flex font-bold justify-center space-x-2 '>
      <h3 className="text-lg lg:text-xl md:text-xl sm:text-lg m-5 font-thin fontstyle mb-2 text-blue-500 uppercase">
        {title}
      </h3>
    </span>
    <ul className="text-black font-thin flex-col mb-4 m-5 fontstyle">
      {description.map((desc, index) => (
        <li key={index} className="ml-5 justify-center">{desc}</li>
      ))}
    </ul>
  </motion.div>
);

export default ServiceComponents;
