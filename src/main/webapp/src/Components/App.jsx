import Dashboard from "./Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Background from "./Backgroung";
import UserLogin from "./UserLogin";
import ForgetPassword from "./ForgetPassword";
import AdminLogin from "./AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/forget password",
    element: <ForgetPassword />,
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
