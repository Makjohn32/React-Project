import React from "react";
import { useNavigate } from 'react-router-dom';
import './EventCard.css';


function EventCard({ event }){
    const navigate = useNavigate();

    return(
        <div className="event-card" onClick={() => navigate(`/event/${event.id}`)}>
            <h2 className="event-title">{event.title}</h2>
            <p className="event-description">{event.description}</p>
            <button className="view-details-button">View Details</button>
        </div>
    );
}

export default EventCard;