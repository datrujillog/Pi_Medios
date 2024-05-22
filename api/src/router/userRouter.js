import express from "express";

import userService from '../service/userService.js';
import { errorResponse } from "../middleware/errorResponse.js";

import authMiddleware from "../middleware/authValidation.js";


class UserRouter {
    static #instance;

    constructor() {
        if (!UserRouter.#instance) {
            UserRouter.#instance = this;
            this.router = express.Router();
            this.setupRoutes();
        }

        return UserRouter.#instance;
    }
    setupRoutes() {
        this.router.post("/create", authMiddleware('admin'), async (req, res) => {

            try {

                const body = req.body;
                const response = await userService.createUser(body);

                return res.status(201).json({
                    success: true,
                    message: "User created successfully",
                    data: response
                });

            } catch (error) {
                console.log(error);
                errorResponse(res, error.message);
            }
        });

        this.router.get("/list",authMiddleware('admin'), async (req, res) => {
            try {
                const response = await userService.listUsers();
                return res.status(200).json({
                    success: true,
                    message: "Users listed successfully",
                    data: response
                });
            } catch (error) {
                console.log(error);
                errorResponse(res, error.message);
            }
        });

        this.router.delete("/delete/:id",authMiddleware('admin'), async (req, res) => {
            try {
                const userId = req.params.id;
                const response = await userService.deleteUser(userId);
                return res.status(200).json({
                    success: true,
                    message: "User deleted successfully",
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

const UserRouterInstance = new UserRouter();
export default UserRouterInstance.getRouter();
