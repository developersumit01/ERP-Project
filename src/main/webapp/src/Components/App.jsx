import Dashboard from "./Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Background from "./Backgroung";
import UserLogin from "./UserLogin";
import ForgetPassword from "./ForgetPassword";
import AdminLogin from "./AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLogin />,
    children:[
      {
        path: "/admin",
        element: <AdminLogin />,
      },
      {
        path: "/forget password",
        element: <ForgetPassword />,
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
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
