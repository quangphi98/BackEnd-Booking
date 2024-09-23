import express from "express";
import { 
    createCatelory,
    updateCatelory,
    deteleCatelory,
    getCatelories,
} from "../controllers/catelory.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/", verifyAdmin,createCatelory);
//Update
router.put("/:id", verifyAdmin,updateCatelory);
//Delete
router.delete("/:id", verifyAdmin,deteleCatelory);
//Get all
router.get("/", getCatelories);


export default router