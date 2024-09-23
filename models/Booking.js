import mongoose from "mongoose";
import autoIncrementModelID from './CountIndex.js';

const BookingSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique : true,
        min : 1,
    },
    carid: {
        type: Number,
        required: true,
    },
    userid: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    numberdayhire: {
        type: String,
        required: true,
    },
    dateget: {
        type: String,
        required: true,
    },
    daterefund: {
        type: String,
        required: true,
    },
    condition:{
        type: String,
        required: true
    }
})

BookingSchema.pre("save",function(next){
    if (!this.isNew) {
        next();
        return;
      }
      autoIncrementModelID("BookingCar", this, next);
})

export default mongoose.model("BookingCar", BookingSchema)