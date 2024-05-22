import express from "express";
import roleService from '../service/rolesService.js'; 
import { errorResponse } from "../middleware/errorResponse.js";


class RoleRouter {
    static #instance;

    constructor() {
        if (!RoleRouter.#instance) {
            RoleRouter.#instance = this;
            this.router = express.Router();
            this.setupRoutes();
        }

        return RoleRouter.#instance;
    }

    setupRoutes() {
        this.router.post("/create", async (req, res) => {

            try {

                const body = req.body;
                const response = await roleService.createRole(body);
                return res.status(201).json({
                    success: true,
                    message: "Role created successfully",
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

const RoleRouterInstance = new RoleRouter();
export default RoleRouterInstance.getRouter();
