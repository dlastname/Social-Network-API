import { Router } from "express";
const router = Router();
import {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
//   addReaction,
//   deleteReaction,
} from "../../controllers/ThoughtsController.js";
// /api/thoughts
//     GET to get all thoughts, POST create a thought
//     POST to create a new thought. Don't forget to push the created thought's _id to the associated user's thoughts array field.
router.route("/").get(getAllThoughts).post(createThought);

// api/"thoughtId"
//     GET to get a single thought by its _id
//     PUT to update a thought by its _id
//     DELETE to remove a thought by its _id
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions

//     POST to create a reaction stored in a single thought's reactions array field

//     DELETE to pull and remove a reaction by the reaction's reactionId value

export default router;
