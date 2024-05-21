import { PrismaClient } from "@prisma/client";
import { BadRequest } from "../middleware/error.js";

class UserRepository {
    static #instance;

    #userModel;

    constructor() {
        if (!UserRepository.#instance) {

            UserRepository.#instance = this;
            this.#userModel = new PrismaClient().user;
        }

        return UserRepository.#instance;
    }

    async createUser(body) {

        try {

            const user = await this.#userModel.create({
                data: {
                    document: body.document,
                    lastName: body.lastName,
                    name: body.name,
                    roles: {
                        connect: {
                            id: body.rolesId
                        }
                    }
                }
            });
            

            return user;
        } catch (error) {
            throw new BadRequest(error);

        }



    }
}

export default new UserRepository;