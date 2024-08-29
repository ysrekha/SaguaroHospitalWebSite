// Define the Footer functional component
export default function Footer() {
    return (
        <div>
            {/* Main footer container */}
            <footer className="footer"> 
                {/* Centered content of the footer */}
                <div className="footer-center">
                    {/* Heading for the contact section */}
                    <h3 className="contact-heading">Contact Us</h3>
                    {/* Address and contact information */}
                    <p>123 Desert Bloom Avenue | Tucson, AZ 85701</p>
                    <p>(555) 123-4567 | www.saguaroaz.com</p>
                </div>
                
                {/* Bottom left section of the footer */}
                <div className="footer-bottom-left">
                    {/* Copyright information */}
                    <p>@ Saguaro Hospital. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
