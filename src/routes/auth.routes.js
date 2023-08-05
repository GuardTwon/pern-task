import Router from "express-promise-router";
import {
  signin,
  signup,
  signout,
  profile,
} from "../controllers/auth.controllers.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validate.middleware.js";

const router = Router();

router.post("/signin",validateSchema(signinSchema), signin);

router.post("/signup",validateSchema(signupSchema), signup);

router.post("/signout", signout);

router.get("/profile", isAuth, profile);

export default router;
