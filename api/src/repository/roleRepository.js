import { PrismaClient } from "@prisma/client";


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

        const user = await this.#roleModel.create({
           data: body,
        });

        return user;
    }
}

export default new RoleRepository;