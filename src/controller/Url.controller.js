import { nanoid } from "nanoid"
import { db } from "../config/database.connect.js"

export async function shortUrl(req, res) {
    const { userId } = res.locals.session
    const url = req.body.url

    const shortUrl = nanoid(10)

    try {

        await db.query(`INSERT INTO urls ("userId", "shortUrl", url, "visitCount") VALUES($1, $2, $3, $4);`, [userId, shortUrl, url, 0,])
        res.status(201).send({ id: userId, shortUrl: shortUrl })

    } catch (error) {
        res.status(500).send(error.message)
    }

}

export async function getUrlById(req, res) {
    const id = req.params.id

    try {

        const { rows } = await db.query('SELECT urls.id, urls."shortUrl", urls.url FROM urls;')
        if (rows.length === 0) return res.sendStatus(404)

        res.send({ id: rows[0].id, shortUrl: rows[0].shortUrl, url: rows[0].url })

    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function openUrl(req, res) {
    const shortUrl = req.params.shortUrl

    try {

        const { rows } = await db.query('SELECT * FROM urls WHERE "shortUrl" = $1;', [shortUrl])
        if (rows.length === 0) return res.sendStatus(404)

        await db.query('UPDATE urls SET "visitCount" = $1 WHERE id = $2;', [rows[0].visitCount + 1, rows[0].id])

        res.redirect(200, rows[0].url)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function deleteUrl(req, res) {
    const urlId = req.params.id
    const { userId } = res.locals.session

    try {

        const { rows } = await db.query('SELECT * FROM urls WHERE id = $1;', [urlId])
        if (rows.length === 0) return res.sendStatus(404)
        if (rows[0].userId !== userId) return res.sendStatus(401)

        await db.query('DELETE FROM urls WHERE id = $1;', [urlId])
        res.sendStatus(204)

    } catch (error) {
        res.status(500).send(error.message)
    }
}