import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faWrench, faTrashAlt, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const data = [
  
    {
      id: 1,
      title: 'Installation',
      description: [
        'Our installation service is dedicated to providing seamless integration of healthcare solutions tailored to meet your specific needs',
      ],
      icon: faTools,
    },
    {
      id: 2,
      title: 'Maintenance',
      description: [
        'Our maintenance service ensures that your equipment, systems, and structures stay in peak condition.',
        
      ],
      icon: faWrench,
    },
    {
      id: 3,
      title: 'Decommission',
      description: [
        'Our decommissioning service provides a safe and efficient process for the retirement of equipment, systems, or facilities.',
        
      ],
      icon: faTrashAlt,  // Updated to the recycle bin icon
    },
    {
      id: 4,
      title: 'Software Upgrade',
      description: [
        'Our decommissioning service offers a safe and efficient approach to retiring equipment, systems, or facilities.',
        
      ],
      icon: faCloudUploadAlt,
    },
  ];

  const AllProducts = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto py-12 px-4 my-20 lg:mb-10 scroll-animation "
      >
        
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <InvolvementCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
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
      transition={{ delay: delay, duration: 0.5 }}
      className="relative bg-white rounded-lg scroll-animation shadow-lg text-black text-center p-5 overflow-hidden transition-colors duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
    >
      {/* Card content */}
      <div className="relative z-10 ">
        {/* Icon */}
        <div className="mb-4 group">
          <FontAwesomeIcon icon={icon} className="text-4xl text-black hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-lg lg:text-xl md:text-xl sm:text-lg m-5 font-thin uppercase mb-2">
          {title}
        </h3>
        <ul className="font-thin mb-4 m-5">
          {description.map((desc, index) => (
            <li key={index} className="ml-5">{desc}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
  
  export default AllProducts;
