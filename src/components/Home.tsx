import React from 'react'; // Import React library
import '../index.css'; // Import CSS file to ensure styles are applied
import CarouselComponent from './CarousalComponent'; // Import the CarouselComponent for displaying images or content

// Define the Home functional component
const Home: React.FC = () => {
    return (
        <div className="home-container"> {/* Main container for the Home page */}
            <h2 className="pageHeader">Welcome to Saguaro Hospital</h2> {/* Page header */}
            <CarouselComponent /> {/* Include the CarouselComponent to display a carousel */}
        </div>
    );
};

export default Home; // Export the Home component for use in other parts of the application
