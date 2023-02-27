import { Router } from "express"
import { signin, signup } from "../controller/Auth.controller.js"
import validateSchema from "../middleware/ValidateSchemas.js"
import { singUpSchema } from "../schemas/Users.schema.js"

const authRouter = Router()

authRouter.post('/signup', validateSchema(singUpSchema), signup)
authRouter.post('/signin', signin)

export default authRouter