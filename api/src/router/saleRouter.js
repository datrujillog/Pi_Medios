import express from "express";
import { errorResponse} from "../middleware/errorResponse.js";
import saleService from "../service/saleService.js";


class SaleRouter {
    static #instance;

    constructor() {
        if (!SaleRouter.#instance) {
            SaleRouter.#instance = this;
            this.router = express.Router();
            this.setupRoutes();
        }

        return SaleRouter.#instance;
    }

    setupRoutes() {
        this.router.post("/create", async (req, res) => {

            try {
                
                const body = req.body;
                const response = await saleService.createSale(body);
                
                return res.status(201).json({
                    success: true,
                    message: "Sale created successfully",
                    data: response
                });

            } catch (error) {
                console.log(error);
                errorResponse(res, error.message);
            }
        });

        this.router.get("/list", async (req, res) => {
            try {
                const response = await saleService.listSales();
                return res.status(200).json({
                    success: true,
                    message: "Sales listed successfully",
                    data: response
                });
            } catch (error) {
                errorResponse(res, error.message);
            }
        });

        this.router.put("/update/:id", async (req, res) => {
            try {
                const id = req.params.id;
                const body = req.body;
                const response = await saleService.updateSale(id, body);
                return res.status(200).json({
                    success: true,
                    message: "Sale updated successfully",
                    data: response
                });
            } catch (error) {
                errorResponse(res, error.message);
            }
        });
    }
    
    getRouter() {
        return this.router;
    }
}

const SaleRouterInstance = new SaleRouter();
export default SaleRouterInstance.getRouter();
