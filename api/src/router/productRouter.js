import express from "express";
import productService from "../service/productService.js";

import { errorResponse } from "../middleware/errorResponse.js";
// import { BadRequest } from "../middleware/errors.js";

class ProducRouter {
    static #instance;

    constructor() {
        if (!ProducRouter.#instance) {
            ProducRouter.#instance = this;
            this.router = express.Router();
            this.setupRoutes();
        }

        return ProducRouter.#instance;
    }

    setupRoutes() {
        this.router.post("/create", async (req, res) => {

            try {

                const body = req.body;
                const response = await productService.createProduct(body);
                return res.status(201).json({
                    success: true,
                    message: "Product created successfully",
                    data: response
                });

            } catch (error) {
                console.log(error);
                errorResponse(res, error.message);
            }
        });

        this.router.get("/list", async (req, res) => {

            try {

                const response = await productService.listProducts();
                return res.status(200).json({
                    success: true,
                    message: "Products retrieved successfully",
                    data: response
                });

            } catch (error) {
                console.log(error);
                errorResponse(res, error.message);
            }
        });
    }

    getRouter() {
        return this.router;
    }
}

const ProducRouterInstance = new ProducRouter();
export default ProducRouterInstance.getRouter();
