import userRepository from "../repository/userRepository.js";



class UserService {
    static #instance; 

    constructor() {
        if (!UserService.#instance) {

            UserService.#instance = this;
        }

        return UserService.#instance;
    }

    async createUser(body) {
        
        const user = await userRepository.createUser(body);
        return user;
    }

    async listUsers() {
        const users = await userRepository.listUsers();
        return users;
    }

    async deleteUser(id) {
        const user = await userRepository.deleteUser(id);
        return user;
    }
}
export default new UserService();