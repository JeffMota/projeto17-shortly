import joi from "joi"

export const singUpSchema = joi.object({
    name: joi.string().max(50).required(),
    email: joi.string().email().required(),
    password: joi.any().required(),
    confirmPassword: joi.any().valid(joi.ref('password')).required()
})