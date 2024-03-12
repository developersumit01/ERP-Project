import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './Dashboard.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminLogin from './AdminLogin.jsx';
import ForgetPassword from './ForgetPassword.jsx';
import appLogo from "../assets/images/Logo.svg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLogin appLogo={appLogo}/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin",
    element: <AdminLogin appLogo={appLogo} />,
  },
  {
    path: "/forget password",
    element: <ForgetPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
