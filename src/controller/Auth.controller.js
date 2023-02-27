import { db } from "../config/database.connect.js"

//Cadastro de usuário
export async function signup(req, res) {
    const { name, email, password } = req.body
    try {

        const alreadyExist = await db.query(`SELECT * FROM users WHERE email = '${email}';`)

        if (alreadyExist) return res.sendStatus(409)

        await db.query(`INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}');`)

        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error.message)
    }

}

//Login
export async function signin(req, res) {
    res.send("Rota de login")
}