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

export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.params.userId })
      .select("-__v")
      .populate("thoughts")
      .populate("friends");

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
    const updateUserData = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updateUserData) {
      res.status(404).json({ message: "No user with that ID" });
    } else {
      res.json(updateUserData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleteUserData = await User.findOneAndDelete({
      _id: req.params.userId,
    });

    if (!deleteUserData) {
      res.status(404).json({ message: "No user with that ID" });
    } else {
      res.json(deleteUserData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// /api/users/:userId/friends/:friendId

//     POST to add a new friend to a user's friend list

//     DELETE to remove a friend from a user's friend list
