import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../src/layout/DashboardLayout.jsx";
import Login from "../src/layout/Login.jsx";
import Officials from "./pages/officials/Officials";
import TicketPage from "./pages/ticketpage/TicketPage";
import Signup from "../src/layout/Signup.jsx";
import LandingPage from "./Landing/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",

    children: [
      {
        index: true,
        element: <LandingPage />,
      },

      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/ticket",
        element: <TicketPage />,
      },

      {
        path: "/Officials",
        element: <Officials />,
      },

      {
        path: "/DashboardLayout",
        element: <DashboardLayout />,
      },

      {
        path: "/ticket/:id",
        element: <TicketPage />,
      },
      {
        path: "*",
        element: "Sorry, page cannot be found",
      },
    ],
  },
]);

export default router;
