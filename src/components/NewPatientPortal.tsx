import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { Patient, Doctor } from '../types'; // Import types for Patient and Doctor
import '../index.css'; // Import CSS file for styling the component

// Define the NewPatientPortal functional component
export default function NewPatientPortal() {
  // Retrieve necessary functions and data from the context provided by the Router
  const { doctors, updatePatientStatus, setPatients } = useOutletContext<{
    doctors: Doctor[]; // List of doctors for the selection dropdown
    updatePatientStatus: (patientId: string, newStatus: "Completed" | "Scheduled" | "Cancelled" | "Waiting") => void; // Function to update patient status
    setPatients: React.Dispatch<React.SetStateAction<Patient[]>>; // Function to update the list of patients
  }>();

  // State variables for form inputs and error handling
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [doctor, setDoctor] = useState('');
  const [reasonForVisit, setReasonForVisit] = useState('');
  const [status] = useState<'Completed' | 'Scheduled' | 'Cancelled' | 'Waiting'>('Waiting'); // Default status
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate(); // Hook for programmatic navigation

  /* Function to handle form submission:

    handleSubmit function 
      prevents default form submission, 
      CREATES a new Patient object, 
      sends a POST request to the server, and 
      updates the patient list.
*/
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    // Construct the new patient object
    const newPatient: Patient = {
      id: '', // Backend will generate this
      name,
      dob,
      phone,
      email,
      address,
      doctor_id: doctor,
      reason_for_visit: reasonForVisit,
      status,
      password,
    };

    try {
      // Send a POST request to create a new patient
      const response = await fetch('http://localhost:3000/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPatient)
      });

      if (!response.ok) {
        throw new Error('Failed to add new patient');
      }

      // Parse the response to get the newly created patient data
      const patientData: Patient = await response.json();

      // Update the list of patients and their status
      setPatients(prevPatients => [...prevPatients, patientData]);
      updatePatientStatus(patientData.id, "Waiting");

      // Fetch updated list of patients and update state
      const updatedPatientsResponse = await fetch('http://localhost:3000/patients');
      if (updatedPatientsResponse.ok) {
        const updatedPatients = await updatedPatientsResponse.json();
        setPatients(updatedPatients);
      }

      // Navigate to the all patients information page
      navigate('/allpatientsinformation');
    } catch (error: any) {
      // Set error message if the request fails
      setError(error.message);
    }
  };

  return (
    /*
    Form Layout:
      Uses react-bootstrap components to create a responsive form layout.
      Form is divided into two columns for personal details and additional information.
      The form includes fields for patient details and a submit button to add a new patient.
      A dropdown is provided for selecting a doctor from the list of doctors.
    */
    <Container className="mt-3"> {/* Container for the form */}
      <h2 className="pageHeader">New Patient Portal</h2> {/* Header for the page */}
      {error && <Alert variant="danger">{error}</Alert>} {/* Display error message if exists */}
      <Form onSubmit={handleSubmit} className="form-background"> {/* Form for patient data submission */}
        <Row>
          <Col md={6}> {/* First column for personal details */}
            <Form.Group controlId="formName">
              <Form.Label className="bold-label">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </Form.Group>

            <Form.Group controlId="formDob">
              <Form.Label className="bold-label">Date of Birth</Form.Label>
              <Form.Control
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                autoComplete="bday"
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label className="bold-label">Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                autoComplete="tel"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label className="bold-label">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label className="bold-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </Form.Group>
          </Col>

          <Col md={6}> {/* Second column for additional details */}
            <Form.Group controlId="formAddress">
              <Form.Label className="bold-label">Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                autoComplete="address"
              />
            </Form.Group>

            <Form.Group controlId="formDoctor">
              <Form.Label className="bold-label">Doctor</Form.Label>
              <Form.Control
                as="select"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                required
                autoComplete="off"
              >
                <option value="" disabled>Select a doctor</option>
                {doctors.map(doc => (
                  <option key={doc.id} value={doc.id}>{doc.name}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formReasonForVisit">
              <Form.Label className="bold-label">Reason for Visit</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter reason for visit"
                value={reasonForVisit}
                onChange={(e) => setReasonForVisit(e.target.value)}
                required
                autoComplete="off"
              />
            </Form.Group>

            <div className="text-end mt-3">
              <Button type="submit" variant="info" className="custom-addnewbutton">Add New Patient</Button> {/* Submit button for the form */}
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
