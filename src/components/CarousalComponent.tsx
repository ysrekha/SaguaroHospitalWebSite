import React from 'react'; // Import React to use JSX
import { Carousel } from 'react-bootstrap'; // Import Carousel component from React Bootstrap
import HospitalBuilding from '../assets/Hospital.png'; // Import image for the first carousel item
import Team from '../assets/Team of 5.png'; // Import image for the second carousel item
import Carousal3 from '../assets/Carousal3.png'; // Import image for the third carousel item

// Define the CarouselComponent functional component
const CarouselComponent: React.FC = () => {
    return (
        // Carousel component from React Bootstrap with custom styling
        <Carousel className="my-carousel">
            
            {/* First carousel item */}
            <Carousel.Item>
                <img
                    className="d-block w-100" // Bootstrap class to make the image full width
                    src={HospitalBuilding} // Source of the image
                    alt="We Care for your Health" // Alt text for accessibility
                />
                <Carousel.Caption>
                    {/* Caption for the first carousel item */}
                    {/* <h3>At Saguaro Clinic...</h3> */}
                    <h5>A hospital may be a place of <i>illness,</i> but it’s also a place of <b>HEALING, HOPE, </b>and <b>HUMANITY.</b></h5>
                </Carousel.Caption>
            </Carousel.Item>
            
            {/* Second carousel item */}
            <Carousel.Item>
                <img
                    className="d-block w-100" // Bootstrap class to make the image full width
                    src={Team} // Source of the image
                    alt="We are a team of five" // Alt text for accessibility
                />
                <Carousel.Caption>
                    {/* Caption for the second carousel item */}
                    {/* <h3>At Saguaro Clinic...</h3> */}
                    <h5>Healing hands. Caring for you, always.</h5>
                </Carousel.Caption>
            </Carousel.Item>
            
            {/* Third carousel item */}
            <Carousel.Item>
                <img
                    className="d-block w-100" // Bootstrap class to make the image full width
                    src={Carousal3} // Source of the image
                    alt="Believe in Lifelines" // Alt text for accessibility
                />
                <Carousel.Caption>
                    {/* Caption for the third carousel item */}
                    {/* <h3>At Saguaro Clinic...</h3> */}
                    <h5>Life is a journey, and sometimes we need a little help 👨‍⚕️ along the way.</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

// Export the CarouselComponent as the default export
export default CarouselComponent;
