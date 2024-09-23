import Slider from "../models/Slider.js";


export const createSlider = async (req, res, next) => {
  const newslider = new Slider(req.body);

  try {
      const savedslider = await newslider.save();
      res.status(200).json(savedslider);
  } catch (err) {
    next(err);
  }
};
export const updateSlider = async (req, res, next) => {
  try {
    const updatedslider = await Slider.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedslider);
  } catch (err) {
    next(err);
  }
};
export const deleteSlider = async (req, res, next) => {
  try {
    await Slider.findByIdAndDelete(req.params.id);
    res.status(200).json("slider has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getSlider = async (req, res, next) => {
  try {
    const slider = await Sliderlider.findById(req.params.id);
    res.status(200).json(slider);
  } catch (err) {
    next(err);
  }
};
export const getSliders = async (req, res, next) => {
  // const { min, max, ...others } = req.query;
  try {
    const sliders = await Slider.find()
    res.status(200).json(sliders);
  } catch (err) {
    next(err);
  }
};

