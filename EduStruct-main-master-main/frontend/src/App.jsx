
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';

// Pages
import Home from './components/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './components/Contact';
import ClassificationForm from './components/Classification';
import ImprovementTracker from './components/Improvement';
import Impact from './components/Impact'; 
import SchoolMap from './components/SchoolMap'; 
import CompareSchools from './components/CompareSchool';
import Solutions from './components/Solutions';

// Dashboards
import SuperAdminDashboard from './Dashboards/SuperAdminDashboard';
import OfficerAdminDashboard from './Dashboards/OfficerAdminDashboard';
import PrivateSchoolAdminDashboard from './Dashboards/PrivateSchoolAdminDashboard';

// Protected Route
import ProtectedRoute from './components/ProtectedRoute';
import ManageSchools from './components/ManageSchools';
import ViewSchools from './components/ViewSchools';
import ManageUsers from './components/ManageUser';
import Reports from './components/Reports';
import Ai from './components/Ai';
import SchoolInformation from './components/SchoolInformation';
import ViewPrivateSchool from './components/ViewPrivateSchool';
import ReviewClassification from './components/ReviewClassification';
import ViewSchoolsGeneral from './components/ViewSchoolsGeneral';
import ChatbotWidget from './EdustructAi/ChatbotWidget';
import SuperReview from './components/SuperReview';
import ScrollToTop from './components/ScrollToTop';
function App() {
  const [schoolStatus, setSchoolStatus] = useState({
    toilets: false,
    library: false,
    playground: false,
    boundaryWall: false,
  });

  const appRouter = createBrowserRouter([
    <ScrollToTop />,
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/view-schools",
      element: <ViewSchoolsGeneral />,
    },

  
    {
      path: "/impact",
      element: <Impact />,
    },
    {
      path: "/map",
      element: <SchoolMap />,
    },
    {
      path: "/compare",
      element: <CompareSchools />,
    },
    {
      path: "/solution",
      element: <Solutions />,
    },

    // Admin Dashboards (Protected)
    {
      path: "/super-admin/dashboard",
      element: (
        <ProtectedRoute allowedRoles={['SuperAdmin']}>
          <SuperAdminDashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/super-admin/schools",
      element: (
        <ProtectedRoute allowedRoles={['SuperAdmin']}>
          <ManageSchools />
        </ProtectedRoute>
      ),
    },
    {
      path: "/super-admin/view-schools",
      element: (
        <ProtectedRoute allowedRoles={['SuperAdmin']}>
          <ViewSchools />
        </ProtectedRoute>
      ),
    },
    {
      path: "/super-admin/users",
      element: (
        <ProtectedRoute allowedRoles={['SuperAdmin']}>
          <ManageUsers />
        </ProtectedRoute>
      ),
    },
    {
      path: "/super-admin/reviews",
      element: (
        <ProtectedRoute allowedRoles={['SuperAdmin']}>
          <SuperReview />
        </ProtectedRoute>
      ),
    },
    {
      path: "/super-admin/reports",
      element: (
        <ProtectedRoute allowedRoles={['SuperAdmin']}>
          <Reports />
        </ProtectedRoute>
      ),
    },
    {
      path: "/officer-admin/dashboard",
      element: (
        <ProtectedRoute allowedRoles={['OfficerAdmin']}>
          <OfficerAdminDashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/officer-admin/classification-form",
      element: (
        <ProtectedRoute allowedRoles={['OfficerAdmin']}>
          <ClassificationForm setStatus={setSchoolStatus} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/officer-admin/improvement-tracker",
      element: (
        <ProtectedRoute allowedRoles={['OfficerAdmin']}>
          <ImprovementTracker status={schoolStatus} />
        </ProtectedRoute>
      ),
    },
    {
      path: "/officer-admin/schools-map",
      element: (
        <ProtectedRoute allowedRoles={['OfficerAdmin']}>
          <SchoolMap />
        </ProtectedRoute>
      ),
    },
    {
      path: "/officer-admin/contact",
      element: (
        <ProtectedRoute allowedRoles={['OfficerAdmin']}>
          <Contact />
        </ProtectedRoute>
      ),
    },
    {
      path: "/officer-admin/ai-analysis",
      element: (
        <ProtectedRoute allowedRoles={['OfficerAdmin']}>
          <Ai />
        </ProtectedRoute>
      ),
    },
    {
      path: "/school-admin/dashboard",
      element: (
        <ProtectedRoute allowedRoles={['PrivateSchoolAdmin']}>
          <PrivateSchoolAdminDashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/school-admin/school-information",
      element: (
        <ProtectedRoute allowedRoles={['PrivateSchoolAdmin']}>
          <SchoolInformation />
        </ProtectedRoute>
      ),
    },
    {
      path: "/school-admin/view-school",
      element: (
        <ProtectedRoute allowedRoles={['PrivateSchoolAdmin']}>
          <ViewPrivateSchool />
        </ProtectedRoute>
      ),
    },
    {
      path: "/school-admin/contact",
      element: (
        <ProtectedRoute allowedRoles={['PrivateSchoolAdmin']}>
          <Contact />
        </ProtectedRoute>
      ),
    },
    {
      path: "/school-admin/review-classification",
      element: (
        <ProtectedRoute allowedRoles={['PrivateSchoolAdmin']}>
          <ReviewClassification />
        </ProtectedRoute>
      ),
    },
  
  ]);

  return (
    <div>
    
      <RouterProvider router={appRouter} />
      <ChatbotWidget />

    </div>
  );
}

export default App;
