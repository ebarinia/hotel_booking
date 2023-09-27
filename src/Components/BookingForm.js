import React from 'react'
import { useState } from 'react'
import { postBooking } from './BookingService'

const BookingForm = ({onAddBooking}) => {

    const [newBooking, setNewBooking] = useState({
        name: "",
        email: "",
        checked_in: false
    })

    const onChange = (e) =>{
        const newBookingData = Object.assign({}, newBooking)
        newBookingData[e.target.name] = e.target.value;
        setNewBooking(newBookingData)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        postBooking(newBooking).then((booking)=> {
            onAddBooking(booking)
        })
        setNewBooking({
            name: "",
            email: "",
        })
    }

    return ( 
        <>
        <form onSubmit={onSubmit} >
            <h1>Add a new booking:</h1>
            <div>
                <label htmlFor='name'>Name:</label>
                <input onChange={onChange} type='text'name='name' value={newBooking.name}/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input onChange={onChange} type='text'name='email' value={newBooking.email}/>
            </div>
            {/* <div>
                <input onChange={onChange} type='radio'name='name' value={newBooking.name}/>
                <label htmlFor='name'>checked In:</label>
                <input onChange={onChange} type='radio'name='name' value={newBooking.name}/>
                <label htmlFor='name'>checked In:</label>
            </div> */}

            <input type="submit" value="Create Booking"/>
        </form>
       
        </>

     )}

export default BookingForm;