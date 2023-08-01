import { Router } from "express";
import { getAllTaks ,getTakId ,createTask,updateTak ,deletTak} from "../controllers/tasks.controllers.js";

const router = Router()

router.get('/tasks',getAllTaks)

router.get('/tasks/:id',getTakId)

router.post('/tasks',createTask)

router.put('/tasks/:id',updateTak)

router.delete('/tasks/:id',deletTak)


export default router