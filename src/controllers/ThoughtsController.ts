import { Request, Response } from "express";
import { User, Thought } from "../models/index.js";

export const getAllThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);

    if (!thoughts) {
      res.status(404).json({
        message: "No thoughts to return at this time... try running seed data?",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getSingleThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOne({ _id: req.params.thoughtId });

    if (!thought) {
      res.status(404).json({ message: "No thought with that ID" });
    } else {
      res.json(thought);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
//     POST to create a new thought. Don't forget to push the created thought's _id to the associated user's thoughts array field.
export const createThought = async (req: Request, res: Response) => {
  try {
    const newThoughtData = await Thought.create(req.body);

    const updatedUser = await User.findOneAndUpdate(
      { username: req.body.username },
      { $push: { thoughts: newThoughtData._id } },
      { new: true }
    );

    if (!updatedUser) {
      // If no user is found, delete the thought and return an error
      await Thought.findByIdAndDelete(newThoughtData._id);
      res.status(404).json({
        message:
          "No user found with this username! Thought deleted. Please try again with a new thought.",
      });
    } else {
      res.json(newThoughtData);
    }
    res.json(newThoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
};

//     PUT to update a thought by its _id
export const updateThought = async (req: Request, res: Response) => {
  try {
    const updateThoughtData = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updateThoughtData) {
      res.status(404).json({ message: "No thought with that ID" });
    } else {
      res.json(updateThoughtData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//     DELETE to remove a thought by its _id
export const deleteThought = async (req: Request, res: Response) => {
  try {
    const thought = req.params.thoughtId;
    
    const deleteThoughtData = await Thought.findOneAndDelete({
      _id: thought,
    });

    if (!deleteThoughtData) {
      res.status(404).json({ message: "No thought with that ID" });
    } else {
      res.json(deleteThoughtData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// /api/thoughts/:thoughtId/reactions

//     POST to create a reaction stored in a single thought's reactions array field
export const addReaction = async (req: Request, res: Response) => {
  try {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;

    // Create the reaction object
    const newReaction = {
      reactionBody,
      username,
    };

    // Find the thought and add the reaction to its `reactions` array
    const updatedThought = await Thought.findOneAndUpdate(
      { _id: thoughtId },
      { $push: { reactions: newReaction } },
      { new: true, runValidators: true }
    );

    if (!updatedThought) {
      res.status(404).json({ message: "No thought found with this ID!" });
    } else {
      res.json(updatedThought);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
//     DELETE to pull and remove a reaction by the reaction's reactionId value
export const deleteReaction = async (req: Request, res: Response) => {
  try {
    const { thoughtId, reactionId } = req.params;

    // Find the thought and remove the reaction by its reactionId
    const updatedThought = await Thought.findOneAndUpdate(
      { _id: thoughtId },
      { $pull: { reactions: { reactionId: reactionId } } },
      { new: true }
    );

    if (!updatedThought) {
      res.status(404).json({ message: "No thought found with this ID!" });
    } else {
      res.json(updatedThought);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
