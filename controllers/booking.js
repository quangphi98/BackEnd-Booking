import Booking from "../models/Booking.js";

export const createBooking= async (req, res, next) => {
    const newBooking = new Booking(req.body);

    try{
        const saveBooking = await newBooking.save();
        res.status(200).json(saveBooking);
    }
    catch(err){
        next(err);
    }
}

export const updateBooking = async (req, res, next) => {
    try{
        const updateBooking = await Booking.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updateBooking);
    }
    catch(err){
        next(err);
    }
}

export const deteleBooking = async (req, res, next) => {
    try{
        await Booking.findByIdAndDelete(req.params.id)
        res.status(200).json("Booking has been deleted");
    }
    catch(err){
        next(err);
    }
}

export const getBookings = async (req, res, next) => {
    try{
        const Bookings = await Booking.find();
        res.status(200).json(Bookings);
    }
    catch(err){
        next(err);
    }
}
