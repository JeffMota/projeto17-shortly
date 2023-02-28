import { nanoid } from "nanoid"
import { db } from "../config/database.connect.js"

export async function shortUrl(req, res) {
    const { userId } = res.locals.session
    const url = req.body.url

    const shortUrl = nanoid(10)

    try {

        await db.query(`INSERT INTO urls ("userId", "shotUrl", url, "visitCount") VALUES(${userId}, '${shortUrl}', '${url}', 0);`)
        res.status(201).send({ id: userId, shortUrl: shortUrl })

    } catch (error) {
        res.status(500).send(error.message)
    }

}