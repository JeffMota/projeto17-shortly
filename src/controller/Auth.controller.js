import { db } from "../config/database.connect.js"

//Cadastro de usuário
export async function signup(req, res) {
    const { name, email, password } = req.body
    try {
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