import { Router } from "express"
import { deleteUrl, getUrlById, openUrl, shortUrl } from "../controller/Url.controller.js"
import validateSchema from "../middleware/ValidateSchemas.js"
import validateToken from "../middleware/ValidateToken.js"
import { shortUrlSchema } from "../schemas/Urls.schema.js"

const urlRouter = Router()

urlRouter.get('/urls/:id', getUrlById)
urlRouter.get('/urls/open/:shortUrl', openUrl)

urlRouter.post('/urls/shorten', validateToken(), validateSchema(shortUrlSchema), shortUrl)
urlRouter.delete('/urls/:id', validateToken(), deleteUrl)

export default urlRouter