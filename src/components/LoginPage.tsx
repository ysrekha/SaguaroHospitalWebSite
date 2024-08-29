import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css'; // Import CSS file for styling the component

// Define the LoginPage functional component
const LoginPage: React.FC = () => {
  // State variables for managing email, password, and error messages
  const [email, setEmail] = useState(''); // State to store the email input value
  const [password, setPassword] = useState(''); // State to store the password input value
  const [error, setError] = useState<string | null>(null); // State to store error messages (if any)
  
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Function to handle the login process
  /*
  handleLogin Function:
    Fetches patient data from the server.
    Finds a patient whose email and password match the input values.
    If a matching user is found, navigates to the patient profile page, passing the user’s ID.
    If no matching user is found, sets an error message.
    Handles and logs errors if the login process fails.
  */
  const handleLogin = async () => {
    try {
      // Fetch the list of patients from the server
      const response = await fetch('http://localhost:3000/patients');
      const patients = await response.json();
      
      // Find a patient with matching email and password
      const user = patients.find((patient: any) => patient.email === email && patient.password === password);
      
      if (user) {
        // If user is found, navigate to the patient profile page and pass the patient ID in the state
        navigate('/patientprofile', { state: { patientId: user.id } });
      } else {
        // If no user is found, set an error message
        setError('Invalid email or password');
      }
    } catch (error: any) {
      // Handle any errors during the login process
      setError('Login failed');
      console.error('Error during login:', error); // Log the error to the console
    }
  };
  /*
  Return JSX:
    Renders the login form with fields for email and password.
    Displays an error message if the error state is set.
  */

  return (
    <div className="login-container"> {/* Container for the login form */}
      <div className="login-form"> {/* Wrapper for form elements */}
        <h1>Login</h1> {/* Page header */}
        <input
          type="email" // Email input field
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on input change
        />
        <input
          type="password" // Password input field
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on input change
        />
        <button onClick={handleLogin}>Login</button> {/* Button to trigger login */}
        {error && <p className="error-message">{error}</p>} {/* Display error message if exists */}
      </div>
    </div>
  );
};

export default LoginPage;
