import express from "express";
import { 
    createContract,
    updateContract,
    deteleContract,
    getContractes,
    getContract,
} from "../controllers/contract.js";

const router = express.Router();

//Create
router.post("/", createContract);
//Update
router.put("/:id", updateContract);
//Delete
router.delete("/:id", deteleContract);
//Get all
router.get("/", getContractes);
//Get
router.get("/:id", getContract);

export default router