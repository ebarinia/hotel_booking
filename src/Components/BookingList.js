import React from 'react'
import Booking from './Booking';

const BookingList = ({bookings, onDeleteBooking}) => {

    const foundBookings = bookings.map((booking, index) => {
        return <Booking key={booking._id} booking={booking} onDeleteBooking={onDeleteBooking}/>
    })

    return ( 
        <>
            <h2> I am the booking list - Howdy </h2>
            <ul>
                {foundBookings}
            </ul>
        </>

     );
}
 
export default BookingList
