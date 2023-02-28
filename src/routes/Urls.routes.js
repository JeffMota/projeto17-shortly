import { Router } from "express"
import { shortUrl } from "../controller/Url.controller.js"
import validateSchema from "../middleware/ValidateSchemas.js"
import validateToken from "../middleware/ValidateToken.js"
import { shortUrlSchema } from "../schemas/Urls.schema.js"

const urlRouter = Router()

urlRouter.post('/urls/shorten', validateToken(), validateSchema(shortUrlSchema), shortUrl)

export default urlRouter