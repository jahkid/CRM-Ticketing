import { createBrowserRouter } from "react-router-dom";
import TicketForm from "./ticketForm/ticketForm";
import DashboardLayout from "./Layout/DashboardLayout";
import NewTicket from "./newTicket/newTicket";
import Login from "./LoginForm/Login";
import SignUp from "./Signup/Signup";
import Users from "./Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <SignUp />,
      },
      {
        path: "/newticket",
        element: <NewTicket />,
      },
      {
        path: "/login",
        element: <TicketForm />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

export default router;
