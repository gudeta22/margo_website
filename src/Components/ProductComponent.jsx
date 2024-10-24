import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const sermons = [
    {
        id: 1,
        title: "CBC",
        imageUrl: "https://www.pixcell-medical.com/wp-content/uploads/2022/07/Rectangle-5.jpg",
        description: "Explore how faith can empower you in difficult times and provide strength in every aspect of life."
    },
    {
        id: 2,
        title: "Chemistry machine",
        imageUrl: "https://www.neuvar.com/wp-content/uploads/2022/05/Hb224275b3bd1467ebe12dae3deba3ed5R.jpg",
        description: "Learn about the importance of love and compassion towards others in this inspiring sermon."
    },
    {
        id: 3,
        title: "Hormone Analyzer",
        imageUrl: "https://www.neuvar.com/wp-content/uploads/2022/05/Hb224275b3bd1467ebe12dae3deba3ed5R.jpg",
        description: "Discover how to find inner peace and serenity during difficult times through faith."
    },

];

const ProductComponent = () => {
    const [expandedId, setExpandedId] = useState(null); // State to track the expanded sermon

    // Toggle the accordion: close if clicked again, otherwise open the new one
    const toggleAccordion = (id) => {
        setExpandedId(prevId => (prevId === id ? null : id));
    };

    return (
        <div className="container mx-auto px-4 my-10 lg:my-52">
            <div className="text-center mb-8">
                <h2 className="text-blue-400  fontstyle text-2xl uppercase">Recent Products</h2>
                <p className="poppins font-normal text-[#686868] text-base md:text-lg lg:text-xl fontstyle lg:my-7">
                Discover our recent additions to the pharmaceutical range, providing innovative solutions tailored to meet your health needs. Trust in our commitment to quality and effective results
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:h-[20rem}">
                {sermons.map(sermon => (
                    <div key={sermon.id} className="bg-white shadow-xl  border-gray-200 rounded-lg overflow-hidden ">
                        
                        {/* Sermon Image */}
                        <div className="relative w-full h-56">
                            <img
                                src={sermon.imageUrl}
                                alt={sermon.title}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>

                        {/* Title and Accordion Button */}
                        <div className="flex justify-between items-center p-4 bg-white">
                            <h3 className="text-lg font-thin text-black">{sermon.title}</h3>
                            <button onClick={() => toggleAccordion(sermon.id)} className="text-xl">
                                {expandedId === sermon.id ? (
                                    <FontAwesomeIcon icon={faChevronUp} />
                                ) : (
                                    <FontAwesomeIcon icon={faChevronDown} />
                                )}
                            </button>
                        </div>

                        {/* Accordion Content */}
                        <div className={`overflow-hidden transition-max-height duration-500 z-50 ease-in-out ${expandedId === sermon.id ? 'max-h-96' : 'max-h-0'}`}>
                            <p className="p-4 text-black">{sermon.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductComponent;
