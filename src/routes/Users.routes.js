import { Router } from "express";
import { getMe, ranking } from "../controller/Users.controller.js";
import validateToken from "../middleware/ValidateToken.js";

const usersRouter = Router()

usersRouter.get('/ranking', ranking)

usersRouter.use(validateToken())
usersRouter.get('/users/me', getMe)

export default usersRouter