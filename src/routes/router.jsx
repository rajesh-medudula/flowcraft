import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../features/dashboard/Dashboard";
import FullLayout from "../layouts/FullLayout";
import WorkflowEditor from "../features/workflow/workflowEditor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "dashboard",
        element: <Dashboard/>
      }
    ]
  },
  {
    path: "workflows/:workflowId",
    element: <FullLayout/>,
    children: [
      {
        index: true,
        element: <WorkflowEditor/>
      }
    ]
  }
])