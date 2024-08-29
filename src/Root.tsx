// Root.tsx
import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './components/SideBar';
import HospitalBanner from './components/HospitalBanner';
import Footer from './components/Footer';
import { Doctor, Patient } from './types';
import './index.css';

export default function Root() {
  // State to store doctors' data
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  // State to store patients' data
  const [patients, setPatients] = useState<Patient[]>([]);
  // State to manage user login details
  const [user, setUser] = useState<{ email: string; token: string } | null>(null);

  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Fetch doctors and patients data on component mount
  /*
    Data Fetching: useEffect handles data fetching for doctors and patients on component mount.
  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch doctors and patients data concurrently
        const [doctorsResponse, patientsResponse] = await Promise.all([
          fetch('http://localhost:3000/doctors', {
            method: 'GET',
          }),
          fetch('http://localhost:3000/patients', {
            method: 'GET',
          }),
        ]);

        // Check if responses are successful
        if (!doctorsResponse.ok || !patientsResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse response data
        const doctorsData: Doctor[] = await doctorsResponse.json();
        const patientsData: Patient[] = await patientsResponse.json();

        // Update state with fetched data
        setDoctors(doctorsData);
        setPatients(patientsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount
  
  /*
    CRUD Operations: Functions updatePatientStatus, loginUser, and deletePatient handle updates, logins, and deletions, respectively.
  */
  // Function to update a patient's status
  const updatePatientStatus = async (patientId: string, newStatus: "Completed" | "Scheduled" | "Cancelled" | "Waiting") => {
    try {
      const response = await fetch(`http://localhost:3000/patients/${patientId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (!response.ok) {
        throw new Error('Failed to update patient status');
      }

      // Update state to reflect status change
      setPatients(prevPatients =>
        prevPatients.map(patient =>
          patient.id === patientId ? { ...patient, status: newStatus } : patient
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // Function to handle user login
  const loginUser = async (email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        throw new Error('Invalid email or password');
      }
  
      const { token, patientId } = await response.json();
      setUser({ email, token });
  
      // Fetch the patient's information after successful login
      const patientResponse = await fetch(`http://localhost:3000/patients/${patientId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!patientResponse.ok) {
        throw new Error('Failed to fetch patient data');
      }
  
      const patientData = await patientResponse.json();
      setPatients(prevPatients => [...prevPatients, patientData]);
  
      navigate('/patientprofile'); // Redirect to the profile page
    } catch (error: any) {
      console.error('Login failed:', error.message);
      // Handle login error (e.g., display message to the user)
    }
  };

  // Function to delete a patient
  const deletePatient = async (patientId: string) => {
    try {
      await fetch(`http://localhost:3000/patients/${patientId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Update state to remove the deleted patient
      setPatients(prevPatients => prevPatients.filter(patient => patient.id !== patientId));
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };
/*
  Navigation and Layout: The Navbar and Sidebar components provide navigation, and 
  HospitalBanner and Footer add static elements.
*/
  return (
    <div className="main-container">
      {/* Sidebar component for navigation or additional controls */}
      <Sidebar />
      <div className="content">
        {/* Banner component displayed at the top of the page */}
        <HospitalBanner />
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/allpatientsinformation">All Patients Information</Nav.Link>
                <Nav.Link as={NavLink} to="/appointmentschedule">Appointment Schedule</Nav.Link>
                <Nav.Link as={NavLink} to="/healthynutrition">Healthy Diet Guide</Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                {user ? (
                  <Nav.Link onClick={() => setUser(null)}>Sign out</Nav.Link>
                ) : (
                  <>
                    <Nav.Link as={NavLink} to="/loginpage">Sign in</Nav.Link>
                    <Nav.Link as={NavLink} to="/newappointment">Register</Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {
      /* Outlet for rendering nested routes 
          Routing: The Outlet component is used for rendering nested routes with context.
        */}
        <Outlet context={{ doctors, patients, updatePatientStatus, deletePatient, loginUser, user, setPatients }} />
        {/* Footer component displayed at the bottom of the page */}
        <Footer />
      </div>
    </div>
  );
}
