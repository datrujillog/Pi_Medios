import roleRepository from "../repository/roleRepository.js";



class RoleService {
    static #instance; 

    constructor() {
        if (!RoleService.#instance) {

            RoleService.#instance = this;
        }

        return RoleService.#instance;
    }

    async createRole(body) {
        
        const roleResults = await roleRepository.createRole(body);
        return roleResults;
    }
}
export default new RoleService();