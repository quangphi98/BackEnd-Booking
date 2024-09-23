import Catelory from "../models/Catelory.js";
import Car from "../models/Car.js";

export const createCatelory= async (req, res, next) => {
    const newcatelory = new Catelory(req.body);

    try{
        const savecatelory = await newcatelory.save();
        res.status(200).json(savecatelory);
    }
    catch(err){
        next(err);
    }
}

export const updateCatelory = async (req, res, next) => {
    try{
        const updateCatelory = await Catelory.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updateCatelory);
    }
    catch(err){
        next(err);
    }
}

export const deteleCatelory = async (req, res, next) => {
    try{
        await Catelory.findByIdAndDelete(req.params.id)
        res.status(200).json("Catelory has been deleted");
    }
    catch(err){
        next(err);
    }
}

export const getCatelories = async (req, res, next) => {
    try{
        const catelories = await Catelory.find();
        res.status(200).json(catelories);
    }
    catch(err){
        next(err);
    }
}

// export const getCarCatelory = async (req, res, next) => {
//     try{
//         const list = [];
//         const catelorie = await Catelory.findById(req.params.id);
//         const car = await Car.find();
//         if()
//         res.status(200).json(catelorie);
//     }
//     catch(err){
//         next(err);
//     }
// }