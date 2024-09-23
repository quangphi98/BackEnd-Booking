import mongoose from "mongoose";
import autoIncrementModelID from './CountIndex.js';

const UserSchema = new mongoose.Schema(
  {
    id: { 
      type: Number, 
      unique: true, 
      min: 1 
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }
  autoIncrementModelID('User', this, next);
});

export default mongoose.model("User", UserSchema);
