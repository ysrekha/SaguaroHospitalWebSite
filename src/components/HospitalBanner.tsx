import savarologo from '../assets/SavaroLogo.png'; // Import the logo image
import '../index.css'; // Import the CSS file for styling the component

// Define the HospitalBanner functional component
const HospitalBanner = () => {
    return (
        <div className="banner"> {/* Container for the banner */}
            <img 
                src={savarologo} // Source of the logo image
                alt="Savaro Logo" // Alternative text for the logo image
                className="savarologo" // CSS class for styling the logo image
            />
            <h1>Saguaro Hospital</h1> {/* Main heading for the hospital name */}
        </div >
    );
}

export default HospitalBanner; // Export the component for use in other parts of the application
