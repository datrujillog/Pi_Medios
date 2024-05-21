import express from "express";
// import userService from '../service/userService.js'; 


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
                const response = await userService.createUser(body);
                return res.status(201).json({
                    success: true,
                    message: "User created successfully",
                    data: response
                });

            } catch (error) {
                console.log(error);
            }

        });







        // Puedes agregar más rutas aquí si es necesario
    }

    getRouter() {
        return this.router;
    }
}

const RoleRouterInstance = new RoleRouter();
export default RoleRouterInstance.getRouter();
