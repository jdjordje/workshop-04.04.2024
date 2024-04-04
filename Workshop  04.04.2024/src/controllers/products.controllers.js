import { ProductService } from "../services/product.services.js";
import { productValidation } from "../schemas/products.schema.js";

export class ProductController {

    static async getAllProducts(req, res) {
        try {
            const products = await ProductService.getAllProducts();

            return res.json(products)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }


    static async getProductByID(req, res) {
        try {

            const foundStudent = await ProductService.getProductByID(req.params.id)

            return res.json(foundStudent)

        } catch (error) {
            console.log(error)
            return res.status(404).json({ msg: error.message })

        }
    }


    static async createProducts(req, res) {
        try {
            await productValidation.validateAsync(req.body, {
                abortEarly: false,
            })
            const newProduct = await ProductService.createProduct(req.body);
            console.log(newProduct)
            return res.status(201).json(newProduct)

        } catch (error) {
            return res.status(400).json({ msg: error.message })
        }
    }

}