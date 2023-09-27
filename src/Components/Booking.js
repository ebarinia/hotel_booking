import React from 'react';
import { eraseBooking } from './BookingService';

const Booking = ({booking, onDeleteBooking}) => {

    const handleClick = () => {
        eraseBooking(booking._id)
            .then(() => {
                onDeleteBooking(booking._id)
            })
    }

    return ( 
        <li>
            <p> {booking.name}</p>
            <p> {booking.email}</p>
            <p> {booking.checked_in ? "1" : "2"}</p>
            <button onClick={handleClick}>Delete Booking</button>
        </li>
     );
}
 
export default Booking;
