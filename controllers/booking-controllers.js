import { booking } from "../models/booking-model.js"


export const getAllBookings = async (req, res, next) => {
    try {
        const getBooking = new booking(req.body)
        await booking.find()
        res.status(200).json(getBooking)
    } catch (error) {
        next(error);
    }
}

export const getOneBooking = (req, res, next) => {
    res.status(200).json('Get one booking')
}

export const postBooking = async (req, res, next) => {
    try {
        const newBooking =  new booking(req.body) 
        const bookings = await newBooking.save()
    
        res.status(201).json(bookings)
    } catch (error) {
        next(error);
        
    }
}
export const UpdateBooking = (req, res) => {
    res.status(200).json('update booking')
}
export const DeleteBooking = (req, res) => {
    res.status(200).json('delete booking')
}

