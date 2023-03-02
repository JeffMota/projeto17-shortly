import { Router } from "express";
import { getMe } from "../controller/Users.controller.js";
import validateToken from "../middleware/ValidateToken.js";

const usersRouter = Router()

usersRouter.use(validateToken())
usersRouter.get('/users/me', getMe)

export default usersRouter