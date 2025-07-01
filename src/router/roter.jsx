import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayOute from "../MainLayouts/MainLayOute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOute />,
    children: [
      {
        path: "/",
        element: <Home />
      },
    ],
  },
]);

export default router
