import mongoose from "mongoose";
import autoIncrementModelID from "./CountIndex.js";

const SliderSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique : true,
        min : 1,
    },
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    photo: {
        type: [String],
    },
},
    { timestamps: true }
);  

SliderSchema.pre('save', function (next) {
    if (!this.isNew) {
      next();
      return;
    }
    autoIncrementModelID('Slider', this, next);
  });
  
  export default mongoose.model("Slider", SliderSchema);