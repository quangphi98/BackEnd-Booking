import mongoose from "mongoose";
import autoIncrementModelID from "./CountIndex.js";

const ContractSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique : true,
        min : 1,
    },
    condition: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    carbookingid: {
        type: Number,
        required: true,
    },
},
    { timestamps: true }
);  

ContractSchema.pre('save', function (next) {
    if (!this.isNew) {
      next();
      return;
    }
    autoIncrementModelID('Contract', this, next);
  });
  
  export default mongoose.model("Contract", ContractSchema);