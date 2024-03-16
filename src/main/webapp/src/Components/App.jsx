import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./Loading";
const UserLogin = React.lazy(() => import("./UserLogin"));
const Background = React.lazy(() => import("./Backgroung"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const ForgetPassword = React.lazy(() => import("./ForgetPassword"));
const AdminLogin = React.lazy(() => import("./AdminLogin"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <UserLogin />
      </Suspense>
    ),
  },
  {
    path: "/admin login",
    element: (
      <Suspense fallback={<Loading />}>
        <AdminLogin />
      </Suspense>
    ),
  },
  {
    path: "/forget password",
    element: (
      <Suspense fallback={<Loading />}>
        <ForgetPassword />
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<Loading />}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    path: "/profile",
    element: (
      <Suspense fallback={<Loading />}>
        <Background />
      </Suspense>
    ),
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
