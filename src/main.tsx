/*
Project Requirements:
  React Router: Using React Router with createBrowserRouter and RouterProvider, fulfilling the routing requirements.
  Pages: At least 3 pages are present (Home, NewPatientPortal, and AllPatientsInformation), which is in line with the requirement.
  Components: Imported at least 10 custom components.
  CRUD Operations: Have the necessary code to implemented and handle CRUD operations in one or more of the components. 
*/

//Hospital Website

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap-grid.min.css' // Importing Bootstrap grid CSS
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPatientPortal from './components/NewPatientPortal.tsx'
import AllPatientsInformation from './components/AllPatientsInformation.tsx'
import AppointmentSchedule from './components/AppointmentSchedule.tsx'
import Root from './Root.tsx'
import HealthyNutrition from './components/HealthyNutrition.tsx'
import './index.css' // Custom global styles
import Home from './components/Home.tsx'
import LoginPage from './components/LoginPage.tsx'
import PatientProfilePage from './components/PatientProfilePage.tsx'

// Setting up the router with routes and components
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Root component which might include common layout or navigation
    children: [
      {
        path:"/",
        element:<Home/> // Home page component
      },
      {
        path: "/newappointment",
        element: <NewPatientPortal /> // Page for new patient appointments
      },
      {
        path: "/allpatientsinformation",
        element: <AllPatientsInformation /> // Page showing all patients' information
      },
      {
        path: "/appointmentschedule",
        element: <AppointmentSchedule /> // Page for scheduling appointments
      },
      {
        path: "/healthynutrition",
        element: <HealthyNutrition /> // Page for healthy nutrition information
      },
      {
        path: "/loginpage",
        element: <LoginPage/> // Login page component
      },
      {
        path: "/patientprofile",
        element: <PatientProfilePage/> // Page showing a patient's profile
      }
    ]
  }
])

// Rendering the application with StrictMode and RouterProvider
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
