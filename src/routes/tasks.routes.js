import Router from "express-promise-router";
import {
  getAllTaks,
  getTakId,
  createTask,
  updateTak,
  deletTak,
} from "../controllers/tasks.controllers.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/tasks", isAuth, getAllTaks);

router.get("/tasks/:id", isAuth, getTakId);

router.post("/tasks", isAuth, createTask);

router.put("/tasks/:id", isAuth, updateTak);

router.delete("/tasks/:id", isAuth, deletTak);

export default router;
