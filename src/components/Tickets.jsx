import React from "react";
import { Link } from "react-router-dom";
import PriorityDisplay from "./PriorityDisplay";
import StatusDisplay from "./StatusDisplay";
import DeleteBox from "./DeleteBox";
import TicketBody from "./ticketBody/TicketBody";

const Tickets = ({ color, ticket }) => {
  return (
    <div id="tickets-wrap">
      <Link to={`/ticket/${ticket.documentId}`} id="ticket-links">
        <div className="ticket-color" style={{ backgroundColor: color }}></div>

        <h3> {ticket.title} </h3>

        <TicketBody />
        <PriorityDisplay priority={ticket.priority} />

        <StatusDisplay ticket={ticket.status} />
        <div className="delete-box">
          <DeleteBox />
        </div>
      </Link>

      {/* <div className="delete-box">
        <DeleteBox />
      </div> */}
    </div>
  );
};

export default Tickets;
