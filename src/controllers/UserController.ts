import User from "../models/User.js";
import { Request, Response } from "express";

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

//   TODO: Make this return the populated thought and friend data, if it has any.
export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.params.userId }).select("-__v");

    if (!user) {
      res.status(404).json({ message: "No user with that ID" });
    } else {
      res.json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUserData = await User.create(req.body);
    res.json(newUserData);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    // TODO: const updateUserData = to find and update a user
  } catch (err) {}
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    // TODO: Find user to delete
  } catch (err) {
    // TODO: if user id does not exist, return "User does not exist"
    // TODO: if user cannot be deleted for reasons other than it not existing, return "User could not be deleted"
  }
};
