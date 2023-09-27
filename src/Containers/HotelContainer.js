import React from 'react'
import {useState, useEffect} from 'react';
import BookingList from '../Components/BookingList';
import BookingForm from '../Components/BookingForm';
import { getBookings } from '../Components/BookingService'

const HotelContainer = () => {

    const [allBookings, setAllBookings] = useState([])

    useEffect (() => {
        getBookings().then((bookings) => {
            setAllBookings(bookings)
        })
    }, [])

    const addBooking = (booking) => {
        setAllBookings([...allBookings, booking])
    }
    
    const deleteBooking = (id) => {
        const remainingBookings = allBookings.filter(booking => booking._id !== id )
        setAllBookings(remainingBookings)
    }







    return ( 
        <div className='App'>
            <h1>I am the container</h1>
            <BookingForm onAddBooking={addBooking}/>
            <BookingList bookings = {allBookings} onDeleteBooking ={deleteBooking} />
        </div>
     );
}
 
export default HotelContainer;