import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayOute from "../MainLayouts/MainLayOute";
import AddJobs from "../pages/AddJobs";
import MyApplication from "../pages/MyApplication";
import AllJobs from "../pages/AllJobs";
import MyPostedJobs from "../pages/MyPostedJobs";
import JobDetails from "../pages/JobDetails";
import JobApply from "../pages/JobApply";
import Login from "../auth/Login";
import Register from "../auth/Register";
import PrivateRoute from "./PrivateRoute";
import ViewApplication from "../pages/ViewApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allJobs",
        element: <AllJobs />,
      },
      {
        path: "/myApplication",
        element: (
          <PrivateRoute>
            <MyApplication />
          </PrivateRoute>
        ),
      },
      {
        path: "/AddJobs",
        element: (
          <PrivateRoute>
            <AddJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/viewApplications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplication />
          </PrivateRoute>
        ),
         loader: ({params}) => fetch(`http://localhost:5000/job-Applications/jobs/${params.job_id}`)
      },
      {
        path: "/mypostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />,
          </PrivateRoute>
        ),
      },
      {
        path: "/jobDetails/:id",
        element: (
          <PrivateRoute>
            <JobDetails />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
    ],
  },
]);

export default router;
