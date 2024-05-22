import { PrismaClient } from "@prisma/client";
import { BadRequest } from "../middleware/error.js";


class RoleRepository {
    static #instance;

    #roleModel;

    constructor() {
        if (!RoleRepository.#instance) {

            RoleRepository.#instance = this;
            this.#roleModel = new PrismaClient().role;
        }

        return RoleRepository.#instance;
    }

    async createRole(body) {

        try {

            const user = await this.#roleModel.create({
                data: body,
            });

            return user;
        } catch (error) {
            throw new BadRequest(error);
        }


    }

    async assignRole(body) {

        try {

            const role = await this.#roleModel.update({
                where: {
                    id: body.roleId
                },
                data: {
                    users: {
                        connect: {
                            id: body.userId
                        }
                    }
                }
            });

            return role;
        } catch (error) {
            throw new BadRequest(error);
        }

    }
}

export default new RoleRepository;