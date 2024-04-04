import { Product } from "../models/product.models.js";

export class ProductService {
    //Get All Products
    static async getAllProducts() {
        const products = await Product.find({});
        return products;
    }
    //Get By Product ID

    static async getProductByID(userId) {

        const foundProduct = await Product.findById(userId);

        if (!foundProduct) throw new Error`Product not found!`;

        return foundProduct;
    }

    //Create Product

    static async createProduct(productData) {
        const newProduct = new Product(productData);
        const createdProduct = newProduct.save();
        return createdProduct;
    }

    //Update Product
    //Delete Product
}