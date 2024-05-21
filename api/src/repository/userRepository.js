import { PrismaClient } from "@prisma/client";


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
            console.log(error);

        }



    }
}

export default new UserRepository;