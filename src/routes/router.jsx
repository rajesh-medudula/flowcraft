import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../layouts/CommonLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import WideLayout from "../layouts/WideLayout";
import Workflow from "../pages/Workflow";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "workflows/:workflowId",
    element: <WideLayout />,
    children: [
      {
        index: true,
        element: <Workflow />,
      },
    ],
  },
]);
