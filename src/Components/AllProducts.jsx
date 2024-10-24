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
        imageUrl: "https://www.rsmedic.com/wp-content/uploads/2022/06/Erba-Chem-7-Clinical-Chemistry-Analyzer.jpeg",
        description: "Learn about the importance of love and compassion towards others in this inspiring sermon."
    },
    {
        id: 3,
        title: "Hormone Analyzer",
        imageUrl: "https://image.made-in-china.com/202f0j00hiqbwnkdQcof/Cheap-Price-Poct-Immunoassay-Analyzer-Hormones-Analyzer-Hba1c-Meter-Mslyt22.webp",
        description: "Discover how to find inner peace and serenity during difficult times through faith."
    },
    {
        id: 4,
        title: "Ultrasound",
        imageUrl: "https://media.istockphoto.com/id/487745279/photo/medical-ultrasound-diagnostic-machine.jpg?s=612x612&w=0&k=20&c=mkYARVaUPiplzA8__m1TppY7OUFnF0cuJi3OEH85FwA=",
        description: "Discover how to find inner peace and serenity during difficult times through faith."
    },
    {
        id: 5,
        title: "Blood Gas Analyzer",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7NAhR4hCgmLEyVs5pI1-pn5MjuqSkNS3d9Q&s",
        description: "Discover how to find inner peace and serenity during difficult times through faith."
    },
    {
        id: 6,
        title: "Electrocardiogram(ECG)",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1DDtGGQPL4cqNhetS7vvy8k-DDUwRX40zA&s",
        description: "Discover how to find inner peace and serenity during difficult times through faith."
    },
    {
        id: 7,
        title: "Patient Monitor",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsPGGJeUtVu9utCvvZxAjCndpXpBGtGdWCw&s",
        description: "Discover how to find inner peace and serenity during difficult times through faith."
    },
    


];

const AllProducts = () => {
    const [expandedId, setExpandedId] = useState(null); // State to track the expanded sermon

    // Toggle the accordion: close if clicked again, otherwise open the new one
    const toggleAccordion = (id) => {
        setExpandedId(prevId => (prevId === id ? null : id));
    };

    return (
        <div className="container mx-auto px-4 lg:my-52">
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:h-[20rem} my-10 lg:-my-20">
                {sermons.map(sermon => (
                    <div key={sermon.id} className="bg-white shadow-xl  border-gray-200 scroll-animation rounded-lg overflow-hidden ">
                        
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

export default AllProducts;
