import mongoose from "mongoose";
import autoIncrementModelID from './CountIndex.js';

const CatelorySchema = new mongoose.Schema({
    id: {
        type: Number,
        unique : true,
        min : 1,
    },
    name: {
        type: String,
        required: true,
    }
})

CatelorySchema.pre("save",function(next){
    if (!this.isNew) {
        next();
        return;
      }
      autoIncrementModelID("Catelory", this, next);
})

export default mongoose.model("Catelory", CatelorySchema)