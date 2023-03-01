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

export async function getUrlById(req, res) {
    const id = req.params.id

    try {

        const { rows } = await db.query('SELECT urls.id, urls."shortUrl", urls.url FROM urls;')

        res.send({ id: rows[0].id, shortUrl: rows[0].shortUrl, url: rows[0].url })

    } catch (error) {
        res.status(500).send(error.message)
    }
}