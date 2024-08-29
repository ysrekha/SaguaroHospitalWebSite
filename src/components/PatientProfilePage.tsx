import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../PatientProfilePage.css'; // Import CSS file for styling the PatientProfilePage component

// Define the PatientProfilePage functional component
const PatientProfilePage: React.FC = () => {
  // State to store the fetched patient data
  const [patient, setPatient] = useState<any>(null);

  // Hook to access location state from the router
/*
  Location Hook:
    useLocation is used to get the current location object.
    patientId is extracted from the location state, which is expected to be passed when navigating to this page.
*/
  const location = useLocation();
  // Extract patientId from location state, which is passed when navigating to this page
  const patientId = location.state?.patientId;

  // useEffect to fetch patient data when the component mounts or patientId changes
  /*
  Data Fetching:
    useEffect triggers the fetchPatient function to retrieve patient data from the API when the component mounts or patientId changes.
    fetchPatient handles the API request, updates the state with patient data, and logs any errors if the request fails.
  */
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        // Fetch patient data from the API using the patientId
        const response = await fetch(`http://localhost:3000/patients/${patientId}`);
        if (!response.ok) {
          throw new Error('Patient not found');
        }
        // Parse the response data
        const data = await response.json();
        // Update the state with the fetched patient data
        setPatient(data);
      } catch (error) {
        // Log any errors encountered during data fetching
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatient();
  }, [patientId]); // Dependency array includes patientId to refetch if it changes

  // Display a loading message while patient data is being fetched
  /*
  Conditional Rendering:
      If patient is null, a loading message is displayed while data is being fetched.
      Once data is available, the patient's details are rendered within a div with the class profile-container.
  */
  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container"> {/* Container for profile details */}
      <h1>{patient.name}</h1> {/* Display the patient's name */}
      <div className="profile-details"> {/* Container for detailed patient information */}
        <p>Date of Birth: {patient.dob}</p> {/* Display patient's date of birth */}
        <p>Phone: {patient.phone}</p> {/* Display patient's phone number */}
        <p>Email: {patient.email}</p> {/* Display patient's email address */}
        <p>Address: {patient.address}</p> {/* Display patient's address */}
        <p>Doctor ID: {patient.doctor_id}</p> {/* Display associated doctor's ID */}
        <p>Reason for Visit: {patient.reason_for_visit}</p> {/* Display reason for the patient's visit */}
        <p>Status: {patient.status}</p> {/* Display current status of the patient */}
      </div>
    </div>
  );
};

// Export the PatientProfilePage component as default
export default PatientProfilePage;
