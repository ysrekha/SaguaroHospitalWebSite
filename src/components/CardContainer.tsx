import React from 'react'; // Import React to use JSX
import Card from './Card'; // Import the Card component
import Cardio from '../assets/Cardiology.png'; // Import image for the Cardiology department
import Derma from '../assets/Dermatology.png'; // Import image for the Dermatology department
import Family from '../assets/Family Medicine.png'; // Import image for the Family Medicine department
import Ortho from '../assets/Orthopedics.png'; // Import image for the Orthopedics department
import Pedia from '../assets/Pediatrics.png'; // Import image for the Pediatrics department

// Array of objects containing data for each card
const cardData = [
    {
        imageSrc: Cardio, // Source of the image for the Cardiology department
        description: 'Cardiology Department' // Description text for the Cardiology department
    },
    {
        imageSrc: Derma, // Source of the image for the Dermatology department
        description: 'Dermatology Department' // Description text for the Dermatology department
    },
    {
        imageSrc: Family, // Source of the image for the Family Medicine department
        description: 'Family Medicine Department' // Description text for the Family Medicine department
    },
    {
        imageSrc: Ortho, // Source of the image for the Orthopedics department
        description: 'Orthopedics Department' // Description text for the Orthopedics department
    },
    {
        imageSrc: Pedia, // Source of the image for the Pediatrics department
        description: 'Pediatrics Department' // Description text for the Pediatrics department
    }
];

// Define the CardContainer functional component
const CardContainer: React.FC = () => {
    return (
        <div className="card-container">
            {/* Map over cardData to create a Card component for each item */}
            {cardData.map((card, index) => (
                <Card 
                    key={index} // Use index as a key for each Card component
                    imageSrc={card.imageSrc} // Pass the image source to the Card component
                    description={card.description} // Pass the description text to the Card component
                />
            ))}
        </div>
    );
};

// Export the CardContainer component as the default export
export default CardContainer;
