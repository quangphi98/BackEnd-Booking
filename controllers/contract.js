import Contract from "../models/Contract.js";
import Car from "../models/Car.js";

export const createContract= async (req, res, next) => {
    const newContract = new Contract(req.body);

    try{
        const saveContract = await newContract.save();
        res.status(200).json(saveContract);
    }
    catch(err){
        next(err);
    }
}

export const updateContract = async (req, res, next) => {
    try{
        const updateContract = await Contract.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updateContract);
    }
    catch(err){
        next(err);
    }
}

export const deteleContract = async (req, res, next) => {
    try{
        await Contract.findByIdAndDelete(req.params.id)
        res.status(200).json("Contract has been deleted");
    }
    catch(err){
        next(err);
    }
}

export const getContractes = async (req, res, next) => {
    try{
        const contractes = await Contract.find();
        res.status(200).json(contractes);
    }
    catch(err){
        next(err);
    }
}

export const getContract = async (req, res, next) => {
    try{
        const contract = await Contract.findById(req.params.id);
        res.status(200).json(contract);
    }
    catch(err){
        next(err);
    }
}