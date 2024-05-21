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

        let role = 'admin';
        
        const user = await this.#userModel.create({
           data: body,
           roles : {
               create: {
                   role: role
               }
           }
           
        });

        return user;
    }
}

export default new UserRepository;