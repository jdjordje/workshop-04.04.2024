import { Router } from "express";
import { productRouter } from "../routes/products.routes.js";

export const globalRouter = new Router();

globalRouter.use("/product", productRouter)