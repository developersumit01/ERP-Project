import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
// this is file is for uttility class of the css
import utillityCSS from "../CSS/Uttil.module.css";
import Loading from "./Loading";
import TimeTable from "./TimeTable";
import PersonalInformationContextProvider from "../Context/PersonalInformationContext";
import AcadmicInformationContextProvider from "../Context/AcadmicInformationContext";
import AuthContextProvider from "../Context/AuthContext";
import Quiz from "./Quiz";
import Calender from "./Calender";
import FeesDue from "./FeesDue";
import Layout from "./Layout";
import NewUser from "./AdminComponents/NewUser";
import EditUserContextProvider from "../Context/EditUserContextProvider";
// import MyProfile from "./MyProfile";
const WorkingSite = React.lazy(()=>import("./WorkingSite"));
const MyProfile = React.lazy(() => import("./MyProfile"));
const UserLogin = React.lazy(() => import("./UserLogin"));
const Background = React.lazy(() => import("./Backgroung"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const ForgetPassword = React.lazy(() => import("./ForgetPassword"));

// const router = createBrowserRouter([

// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthContextProvider>
        <AcadmicInformationContextProvider>
          <PersonalInformationContextProvider>
            <EditUserContextProvider>
              <Layout />
            </EditUserContextProvider>
          </PersonalInformationContextProvider>
        </AcadmicInformationContextProvider>
      </AuthContextProvider>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <UserLogin admin={false} />
          </Suspense>
        ),
        children: [
          {
            path: "/",
            element: (
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/admin",
        element: (
          <Suspense fallback={<Loading />}>
            <UserLogin admin={true} />
          </Suspense>
        ),
        children: [
          {
            path: "/admin",
            element: (
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            ),
          },
        ],
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
        path: "/:userName",
        element: (
          <Suspense fallback={<Loading />}>
            <Background />
          </Suspense>
        ),
        children: [
          {
            path: "/:userName/profile",
            element: (
              <Suspense fallback={<Loading />}>
                <MyProfile />
              </Suspense>
            ),
            // element:<MyProfile />
          },
          {
            path: "/:userName/time table",
            element: (
              <Suspense fallback={<Loading />}>
                <TimeTable />
              </Suspense>
            ),
            // element:<MyProfile />
          },
          {
            path: "/:userName/play quizs",
            element: (
              <Suspense fallback={<Loading />}>
                <Quiz />
              </Suspense>
            ),
            // element:<MyProfile />
          },
          {
            path: "/:userName/attendance",
            element: (
              <Suspense fallback={<Loading />}>
                <Calender />
              </Suspense>
            ),
            // element:<MyProfile />
          },
          {
            path: "/:userName/fees",
            element: (
              <Suspense fallback={<Loading />}>
                <FeesDue />
              </Suspense>
            ),
            // element:<MyProfile />
          },
          {
            path: "/:userName/new",
            element: (
              <Suspense fallback={<Loading />}>
                <NewUser />
              </Suspense>
            ),
            // element:<MyProfile />
          },
        ],
      },
      {
        path: "/*",
        element: (
          <Suspense fallback={<Loading />}>
            <WorkingSite />
          </Suspense>
        ),
      },
    ],
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
