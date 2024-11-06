import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const sermons = [
    {
        id: 1,
        title: "Hematology Analyzer(CBC)",
        imageUrl: "https://medicalequipment-msl.com/upload/img/20200810/202008101428259081.jpg",
        description: "A Hematology Analyzer, specifically for Complete Blood Count (CBC), is a medical device used to analyze blood samples, providing critical information on various blood components"
    },
    {
        id: 2,
        title: "Chemistry Machine",
        imageUrl: "https://ueeshop.ly200-cdn.com/u_file/UPAP/UPAP543/2302/photo/5c7aa534d9.jpg?x-oss-process=image/format,webp",
        description: "A Chemistry Machine, commonly known as a Chemistry Analyzer, is a laboratory instrument used to analyze blood and other bodily fluids to measure the concentration of various biochemical components"
    },
    {
        id: 3,
        title: "Hormone Analyzer",
        imageUrl: "https://svrbiotech.com/wp-content/uploads/2020/02/ss2.jpg",
        description: "A Hormone Analyzer is a specialized medical device used to measure hormone levels in blood or other bodily fluids."
    },
    {
        id: 4,
        title: "Ultrasound Machine",
        imageUrl: "https://www.chison.com/data/watermark/20210426/608626c64374f.png",
        description: "Our ultrasound device provides advanced imaging technology to deliver clear and detailed visuals for accurate diagnosis and patient assessment."
    },
    {
        id: 5,
        title: "Blood Gas Analyzer",
        imageUrl: "https://www.mmsmedlab.com/wp-content/uploads/2020/01/Wondfo-Bloog-Gas-Analyzer-ABG-Analyzer.jpg",
        description: "The Blood Gas Analyzer is an essential medical device that delivers rapid and precise measurements of blood gases, including pH, carbon dioxide, and oxygen levels."
    },
    {
        id: 6,
        title: "Electrocardiogram(ECG)",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdwNIamlV3PcSZh8OP7UP5tEC0omD-1Cw_eA&s",
        description: "The ECG Machine is a vital diagnostic tool that monitors and records the electrical activity of the heart."
    },
    {
        id: 7,
        title: "Patient Monitor",
        imageUrl: "https://5.imimg.com/data5/IO/QC/SQ/SELLER-8331999/comen-c50-multi-parameter-patient-monitor-500x500.jpg",
        description: "The Patient Monitor is a crucial medical device designed to continuously track and display vital signs, including heart rate, blood pressure, oxygen saturation, and respiratory rate."
    },
    


];

const AllProducts = () => {
    const [expandedId, setExpandedId] = useState(null); // State to track the expanded sermon

    // Toggle the accordion: close if clicked again, otherwise open the new one
    const toggleAccordion = (id) => {
        setExpandedId(prevId => (prevId === id ? null : id));
    };

    return (
        <div className="container mx-auto px-4 my-10 lg:my-52">
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animation">
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
        </div>
    );
};

export default AllProducts;
