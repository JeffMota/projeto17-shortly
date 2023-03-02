import { db } from "../config/database.connect.js";

export async function getMe(req, res) {
    const userId = res.locals.session.userId

    try {

        const { rows } = await db.query(`SELECT json_build_object(
            'id', users.id,
            'name', users.name,
            'visitCount', 0,
            'shortenedUrls', 0
            )
            FROM users
            WHERE users.id = $1;
        `, [userId])

        const user = rows[0].json_build_object

        const sumVisits = await db.query(`SELECT SUM("visitCount") FROM urls WHERE "userId" = $1;`, [userId])
        user.visitCount = Number(sumVisits.rows[0].sum)

        const urls = await db.query(`SELECT id, "shortUrl", url, "visitCount" FROM urls WHERE "userId" = $1;`, [userId])
        user.shortenedUrls = urls.rows

        res.send(user)


    } catch (error) {
        res.status(500).send(error.message)
    }
}