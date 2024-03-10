import Dashboard from "./Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Background from "./Backgroung";
import UserLogin from "./UserLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLogin />,
    children:[
      {
            path:"/",
            element:<Dashboard />
      }
    ]
  },
  {
    path: "/background",
    element: <Background />,
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
