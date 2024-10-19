import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './components/EventCard';
import './styles/EventPage.css';

function EventPage(){
    const [events, setEvents] = useState([])


    useEffect (() => {
        axios.get('http://testlc.lncdoo.com/api/myprofile/events').then(response => {
            const inClassEvents = response.data.data.filter(event => event.is_inclass);
            setEvents(inClassEvents);
        })
        .catch(error => {console.error('Error fetching events:', error);
        });
    },[]);

    return(
       <div className="events-page">
        <h1 className="page-title">Events</h1>
        <div className="events-list">
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
       </div>
    );
}

export default EventPage;