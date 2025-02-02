import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import DailyReport from "../Pages/DailyReport/DailyReport/DailyReport";
import PeriodicReport from "../Pages/PeriodicReport/PeriodicReport/PeriodicReport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dailyReport",
        element: <DailyReport />,
      },
      {
        path: "/periodicReport",
        element: <PeriodicReport />,
      },
    ],
  },
]);
