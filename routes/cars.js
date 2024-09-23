import express from "express";
import {
  createCar,
  deleteCar,
  getCar,
  getCars,
  updateCar,
} from "../controllers/car.js";
import Car from "../models/Car.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", createCar);

//UPDATE
router.put("/:id", verifyAdmin, updateCar);
//DELETE
router.delete("/:id", verifyAdmin, deleteCar);            
//GET

router.get("/find/:id", verifyAdmin, getCar);
//GET ALL

router.get("/", verifyAdmin, getCars);

export default router;
