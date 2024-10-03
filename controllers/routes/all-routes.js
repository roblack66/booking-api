import { Router } from "express";

import { DeleteBooking, getAllBookings, getOneBooking, postBooking, UpdateBooking } from "../booking-controllers.js";


export const bookingRouter = Router()

bookingRouter.get('/bookings', getAllBookings)



bookingRouter.get('/bookings/:id', getOneBooking)

bookingRouter.post('/booking', postBooking)
bookingRouter.patch('/booking/:id', UpdateBooking)
bookingRouter.delete('/booking/:id', DeleteBooking)