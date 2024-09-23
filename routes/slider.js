import express from "express";
import { 
    createSlider,
    updateSlider,
    deleteSlider,
    getSliders,
    getSlider,
} from "../controllers/slider.js";

const router = express.Router();

//Create
router.post("/", createSlider);
//Update
router.put("/:id", updateSlider);
//Delete
router.delete("/:id", deleteSlider);
//Get all
router.get("/", getSliders);
//Get
router.get("/:id", getSlider);

export default router