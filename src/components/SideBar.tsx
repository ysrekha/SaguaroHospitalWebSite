import React from 'react';
import { Nav } from 'react-bootstrap';
import CardContainer from './CardContainer'; // Import the CardContainer component to display department cards
import '../Sidebar.css'; // Import CSS file for styling the Sidebar component

// Define the Sidebar functional component
/*
Sidebar Component:
    Sidebar is a functional component defined using React.FC.
    The component returns a div with a class of sidebar that serves as the main container.
    Nav is used with the flex-column class to create a vertical navigation layout.
    An h4 element with the class center-text mt-3 displays the title "Our Departments", with some margin-top applied.
    CardContainer is included within a div with the class card-container-sidebar, which likely provides styling or layout for the cards.
*/
const Sidebar: React.FC = () => {
    return (
        <div className="sidebar"> {/* Main container for the sidebar */}
            <Nav className="flex-column"> {/* Vertical navigation menu */}
                <h4 className="center-text mt-3">Our Departments</h4> {/* Title for the sidebar */}
                <div className="card-container-sidebar"> {/* Container for the CardContainer */}
                    <CardContainer /> {/* Render the CardContainer component */}
                </div>
            </Nav>
        </div>
    );
};

// Export the Sidebar component as default
export default Sidebar;
