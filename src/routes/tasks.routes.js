import Router from "express-promise-router";
import {
  getAllTaks,
  getTakId,
  createTask,
  updateTak,
  deletTak,
} from "../controllers/tasks.controllers.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import {validateSchema} from '../middlewares/validate.middleware.js';
import {createTaskSchema,updateTaskSchema} from '../schemas/task.schema.js';


const router = Router();

router.get("/tasks", isAuth, getAllTaks);

router.get("/tasks/:id", isAuth, getTakId);

router.post("/tasks", isAuth, validateSchema(createTaskSchema),createTask);

router.put("/tasks/:id", isAuth, validateSchema(updateTaskSchema),updateTak);

router.delete("/tasks/:id", isAuth, deletTak);

export default router;
