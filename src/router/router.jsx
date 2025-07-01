import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayOute from "../MainLayouts/MainLayOute";
import AddJobs from "../pages/AddJobs";
import MyApplication from "../pages/MyApplication";
import AllJobs from "../pages/AllJobs";
import MyPostedJobs from "../pages/MyPostedJobs";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOute />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/allJobs",
        element: <AllJobs />
      },
      {
        path: "/myApplication",
        element: <MyApplication />
      },
      {
        path: "/AddJobs",
        element: <AddJobs />
      },
      {
        path: "/mypostedJobs",
        element: <MyPostedJobs />
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails />
      },
    ],
  },
]);

export default router
