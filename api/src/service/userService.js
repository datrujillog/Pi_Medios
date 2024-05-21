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
        // Lógica para crear un usuario
        const user = await userRepository.createUser(body);
        return user;
    }
}
export default new UserService();