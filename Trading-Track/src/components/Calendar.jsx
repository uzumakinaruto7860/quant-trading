import React, { useState, useEffect } from 'react';
const Calendar = () => {
    const [events, setEvents] = useState([]);
//   

    return (
        <div>
            {events.map(event => (
                <div key={event.id}>
                    <p>{event.date}</p>
                    <p>{event.description}</p>
                    <p>{event.impact}</p>
                </div>
            ))}
        </div>
    )
}

export default Calendar
