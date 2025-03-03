import { Router } from "express";
const router = Router();
import userRoutes from "./UserRoutes";
import thoughtRoutes from "./ThoughtRoutes";

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

export default router;