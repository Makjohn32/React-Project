import React, { useState, useEffect } from "react";
import { userParams } from 'react-router-dom';
import axios from 'axios';


function EventDetailPage(){
    const { id } = userParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        axios.get('http://testlc.lncdoo.com/api/myprofile/events')
        .then(response => {
            const inClassEvents = response.data.data.filter(event => event.is_inclass);
            const selectedEvent = inClassEvents.find(event => event.id === parseInt(id));
            setEvent(selectedEvent);
        })
        .catch(error => {
            console.error('Error catching event details:', error);
        })
    }, [id]);

    if (!event){
        return(<p>Loading...</p>);
    }

    return(
        <div>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <h2>Topics:</h2>
            <ul>
                {event.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                ))}
            </ul>
        </div>
    );
}


export default EventDetailPage;