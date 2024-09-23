import mongoose from "mongoose";
import autoIncrementModelID from './CountIndex.js';

const CarSchema = new mongoose.Schema({
  id: { 
    type: Number, 
    unique: true, 
    min: 1 
  },
  name: {
    type: String,
    required: true,
  },
  numberchair: {
    type: Number,
    required: true,
  },
  numberplates: {
    type: Number,
    required: true,
  },
  cateloryId: {
    type: Number,
  },
  fuel: {
    type: String,
    required: true,
  },
  consume: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  condition: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  price: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

CarSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }
  autoIncrementModelID('Car', this, next);
});

export default mongoose.model("Car", CarSchema)