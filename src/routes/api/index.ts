import { Router } from "express";
const router = Router();
import userRoutes from "./UserRoutes.js";
import thoughtRoutes from "./ThoughtRoutes.js";

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

export default router;
