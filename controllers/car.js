import Car from "../models/Car.js";
import Catelory from "../models/Catelory.js"

export const createCar = async (req, res, next) => {
  const newcar = new Car(req.body);

  try {
      const savedcar = await newcar.save();
      res.status(200).json(savedcar);
  } catch (err) {
    next(err);
  }
};
export const updateCar = async (req, res, next) => {
  try {
    const updatedcar = await Car.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedcar);
  } catch (err) {
    next(err);
  }
};
export const deleteCar = async (req, res, next) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.status(200).json("car has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getCar = async (req, res, next) => {
  try {
    const car = await Car.findById(req.params.id);
    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
};
export const getCars = async (req, res, next) => {
  // const { min, max, ...others } = req.query;
  try {
    const cars = await Car.find()
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
};

