import { Container, Dropdown } from 'react-bootstrap'; // Import Container and Dropdown components from react-bootstrap
import { useOutletContext } from 'react-router-dom'; // Import useOutletContext for accessing context data
import type { Doctor, Patient } from '../types'; // Import types for Doctor and Patient

// Define and export the AppointmentSchedule component
export default function AppointmentSchedule() {
  // Extract context values: doctors, patients, updatePatientStatus, deletePatient
  const { doctors, patients, updatePatientStatus, deletePatient } = useOutletContext<{
    doctors: Doctor[]; // List of doctors
    patients: Patient[]; // List of patients
    updatePatientStatus: (patientId: string, newStatus: "Completed" | "Scheduled" | "Cancelled" | "Waiting") => void; // Function to update patient status
    deletePatient: (patientId: string) => void; // Function to delete a patient
  }>();

  // Function to get the doctor's name by their ID
  const getDoctorNameById = (doctorId: string) => {
    const doctor = doctors.find(d => d.id === doctorId); // Find doctor by ID
    return doctor ? doctor.name : 'Unknown'; // Return doctor's name or 'Unknown' if not found
  };

  return (
    <Container className="mt-3"> {/* Container component for layout with margin-top */}
      <h2 className="pageHeader">Appointment Schedule</h2> {/* Header for the page */}
      <table className="table table-bordered table-striped"> {/* Table with Bootstrap styling */}
        <thead>
          <tr>
            <th>Patient Name</th> {/* Column for patient name */}
            <th>Date of Birth</th> {/* Column for date of birth */}
            <th>Phone</th> {/* Column for phone number */}
            <th>Email</th> {/* Column for email address */}
            <th>Address</th> {/* Column for address */}
            <th>Doctor</th> {/* Column for doctor's name */}
            <th>Reason for Visit</th> {/* Column for reason for visit */}
            <th>Status</th> {/* Column for status */}
            <th>Actions</th> {/* Column for action buttons */}
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => ( // Map over the list of patients
            <tr key={patient.id}> {/* Table row for each patient */}
              <td>{patient.name}</td> {/* Patient's name */}
              <td>{patient.dob}</td> {/* Patient's date of birth */}
              <td>{patient.phone}</td> {/* Patient's phone number */}
              <td>{patient.email}</td> {/* Patient's email address */}
              <td>{patient.address}</td> {/* Patient's address */}
              <td>{getDoctorNameById(patient.doctor_id)}</td> {/* Doctor's name by ID */}
              <td>{patient.reason_for_visit}</td> {/* Reason for the visit */}
              <td>{patient.status}</td> {/* Current status of the patient */}
              <td>
                <Dropdown> {/* Dropdown for action options */}
                  <Dropdown.Toggle variant="info" id="dropdownMenuButton">
                    Actions {/* Button text */}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* Menu items for updating patient status and deleting patient */}
                    <Dropdown.Item as="button" onClick={() => updatePatientStatus(patient.id, "Scheduled")}>Scheduled</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => updatePatientStatus(patient.id, "Completed")}>Completed</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => updatePatientStatus(patient.id, "Cancelled")}>Cancelled</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={() => updatePatientStatus(patient.id, "Waiting")}>Waiting</Dropdown.Item>
                    <Dropdown.Divider /> {/* Divider between status options and delete option */}
                    <Dropdown.Item as="button" onClick={() => deletePatient(patient.id)}>Delete</Dropdown.Item> {/* Option to delete the patient */}
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
