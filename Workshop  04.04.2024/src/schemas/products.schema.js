import joi from "joi";

export const productValidation = joi.object({
    title: joi.string().min(3).required(),
    stock: joi.number().min(0).required(),
    description: joi.string().min(5),
    category: joi.string().required(),
    price: joi.number(),
    rating: joi.number().min(1).max(5)
})