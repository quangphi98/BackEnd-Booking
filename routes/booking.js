import express from "express";
import { 
    createBooking,
    updateBooking,
    deteleBooking,
    getBookings,
} from "../controllers/booking.js";

const router = express.Router();

//Create
router.post("/", createBooking);
//Update
router.put("/:id", updateBooking);
//Delete
router.delete("/:id", deteleBooking);
//Get all
router.get("/", getBookings);


export default router