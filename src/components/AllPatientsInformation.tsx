import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling
import { useEffect, useState } from 'react'; // Import React hooks for state and effect management
import { Container, Table } from 'react-bootstrap'; // Import Container and Table components from react-bootstrap

// Define the type for an Appointment object
type Appointment = {
    id: string; // Unique identifier for the appointment
    name: string; // Patient's name
    dob: string; // Patient's date of birth
    phone: string; // Patient's phone number
    reason_for_visit: string; // Reason for the patient's visit
};

// Define and export the AllPatientsInformation component
export default function AllPatientsInformation() {
    // State to hold the list of appointments
    const [appointmentList, setAppointmentList] = useState<Appointment[]>([]);

    // Effect hook to fetch appointment data when the component mounts
    /*
            Effect Hook:
            Use useEffect to fetch appointment data from the API when the component mounts.
            fetchAppointments: Asynchronous function to fetch and update the state with appointment data.
    */
    useEffect(() => {
        const fetchAppointments = async () => {
            // Fetch data from the API
            const response = await fetch('http://localhost:3000/patients');
            const data = await response.json(); // Parse the JSON response
            setAppointmentList(data); // Update state with the fetched data
        };
        fetchAppointments(); // Call the fetch function
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <Container className="mt-3"> {/* Container component for layout with margin-top */}
            <h2 className="pageHeader">All Patient Information</h2> {/* Header for the page */}
            <Table striped bordered hover responsive> {/* Table with Bootstrap styling */}
                <thead>
                    <tr>
                        <th>Name</th> {/* Table header for patient's name */}
                        <th>Date of Birth</th> {/* Table header for date of birth */}
                        <th>Phone</th> {/* Table header for phone number */}
                        <th>Reason for Visit</th> {/* Table header for reason for visit */}
                    </tr>
                </thead>
                <tbody>
                    {appointmentList.map(appointment => ( // Map over the list of appointments
                        <tr key={appointment.id}> {/* Table row for each appointment */}
                            <td>{appointment.name}</td> {/* Patient's name */}
                            <td>{appointment.dob}</td> {/* Patient's date of birth */}
                            <td>{appointment.phone}</td> {/* Patient's phone number */}
                            <td>{appointment.reason_for_visit}</td> {/* Reason for the patient's visit */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
