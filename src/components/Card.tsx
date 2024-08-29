import React from 'react'; // Import React to use JSX

// Define the props interface for the Card component
interface CardProps {
    imageSrc: string; // The source URL for the card image
    description: string; // The description text to display on the card
}

// Define the Card functional component using TypeScript
const Card: React.FC<CardProps> = ({ imageSrc, description }) => {
    return (
        <div className="card"> {/* Wrapper div with a CSS class for styling */}
            <img 
                src={imageSrc} // Set the source URL for the image
                alt="Card Image" // Alt text for the image (for accessibility)
                className="card-image" // CSS class for styling the image
            />
            <p className="card-description"> {/* Paragraph element to display the description */}
                {description} {/* Render the description passed as a prop */}
            </p>
        </div>
    );
};

// Export the Card component as the default export
export default Card;
