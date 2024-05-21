import express from "express";
import userService from '../service/userService.js'; 
import { errorResponse} from "../middleware/errorResponse.js";
import { BadRequest } from "../middleware/errors.js";

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
