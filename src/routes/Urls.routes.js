import { Router } from "express"
import { getUrlById, openUrl, shortUrl } from "../controller/Url.controller.js"
import validateSchema from "../middleware/ValidateSchemas.js"
import validateToken from "../middleware/ValidateToken.js"
import { shortUrlSchema } from "../schemas/Urls.schema.js"

const urlRouter = Router()

urlRouter.get('/urls/:id', getUrlById)
urlRouter.get('/urls/open/:shortUrl', openUrl)

urlRouter.use(validateToken())
urlRouter.post('/urls/shorten', validateSchema(shortUrlSchema), shortUrl)

export default urlRouter