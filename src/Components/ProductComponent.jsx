import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const sermons = [
    {
        id: 1,
        title: "Hematology Analyzer(CBC)",
        imageUrl: "https://m.media-amazon.com/images/I/71xSomVDYEL._AC_UF1000,1000_QL80_.jpg",
        description: "A Hematology Analyzer, specifically for Complete Blood Count (CBC), is a medical device used to analyze blood samples, providing critical information on various blood components"
    },
    {
        id: 2,
        title: "Chemistry Machine",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPZ_uhZHodhJccytOmEndiEblEFiBNMOKjg&s",
        description: "A Chemistry Machine, commonly known as a Chemistry Analyzer, is a laboratory instrument used to analyze blood and other bodily fluids to measure the concentration of various biochemical components"
    },
    {
        id: 3,
        title: "Hormone Analyzer",
        imageUrl: "https://svrbiotech.com/wp-content/uploads/2020/02/ss2.jpg",
        description: "A Hormone Analyzer is a specialized medical device used to measure hormone levels in blood or other bodily fluids."
    },
];

const ProductComponent = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleAccordion = (id) => {
        setExpandedId(prevId => (prevId === id ? null : id));
    };

    return (
        <div className="container mx-auto px-4 my-10 lg:my-52 scroll-animation">
            <div className="text-center mb-8">
                <h2 className="poppins font-normal uppercase text-blue-400 text-base md:text-lg lg:text-2xl fontstyl">Recent Products</h2>
                <p className="poppins font-normal text-[#686868] text-base md:text-lg lg:text-xl fontstyle lg:my-7">
                Explore our newest medical devices, designed to enhance patient care and improve health outcomes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sermons.map(sermon => (
                    <div key={sermon.id} className="bg-white shadow-xl border-gray-200 rounded-lg overflow-hidden">
                        {/* Sermon Image */}
                        <div className="relative w-full h-56">
                            <img
                                src={sermon.imageUrl}
                                alt={sermon.title}
                                className="absolute top-0 left-0 w-full h-full object-fit"
                            />
                        </div>

                        {/* Title and Accordion Button */}
                        <div className="flex justify-between items-center p-4 bg-white">
                            <h3 className="text-lg font-bold poppins text-gray-800">{sermon.title}</h3>
                            <button onClick={() => toggleAccordion(sermon.id)} className="text-xl">
                                {expandedId === sermon.id ? (
                                    <FontAwesomeIcon icon={faChevronUp} />
                                ) : (
                                    <FontAwesomeIcon icon={faChevronDown} />
                                )}
                            </button>
                        </div>

                        {/* Accordion Content */}
                        <div
                            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${expandedId === sermon.id ? 'max-h-screen' : 'max-h-0'}`}
                        >
                            <p className="p-4 text-black">{sermon.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Link to Products Page */}
            <div className="mt-8 text-center">
                <Link to="/product" className="text-blue-500 underline">
                    View All Products
                </Link>
            </div>
        </div>
    );
};

export default ProductComponent;
