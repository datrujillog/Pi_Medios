import express from "express";
import userService from '../service/userService.js'; 
// import userService from "../service/userService";

// import { errorResponse, authResponse, results } from "../helper/response.js";
// import { BadRequest } from "../middleware/errors.js";
// import env from "../config/env.js";
// import { asyncHandler } from "../middleware/handler.js";

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
        this.router.post("/create", async (req, res) => {

            try {

                const body = req.body;
                const response = await userService.createUser(body);
                // if (!response.success) throw new BadRequest(response.error.message);
                // const { user } = response;
                return res.status(201).json({
                    success: true,
                    message: "User created successfully",
                    data: response
                });

            } catch (error) {
                console.log(error);
                // errorResponse(res, error.message);

            }

        });

        

      
        


        // Puedes agregar más rutas aquí si es necesario
    }
    
    getRouter() {
        return this.router;
    }
}

const UserRouterInstance = new UserRouter();
export default UserRouterInstance.getRouter();
