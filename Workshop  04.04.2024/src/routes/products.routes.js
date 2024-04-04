import { Router } from "express";
import { ProductController } from "../controllers/products.controllers.js";

export const productRouter = Router();

productRouter.get("/", ProductController.getAllProducts)
productRouter.get("/:id", ProductController.getProductByID)
productRouter.post("/", ProductController.createProducts)