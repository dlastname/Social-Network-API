import { Router } from "express";
const router = Router();
import {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} from "../../controllers/UserController";

// /api/users
//     at /"" GET all users, POST create a user
router.route("/").get(getAllUsers).post(createUser);

// at /"userID"
//  GET a single user by its _id and populated thought and friend data,
// PUT to update a user by its _id
// DELETE to remove user by its _id
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId

//     POST to add a new friend to a user's friend list

//     DELETE to remove a friend from a user's friend list


export default router;