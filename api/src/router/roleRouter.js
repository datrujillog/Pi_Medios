import express from "express";



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

    }
    
    getRouter() {
        return this.router;
    }
}

const UserRouterInstance = new UserRouter();
export default UserRouterInstance.getRouter();
