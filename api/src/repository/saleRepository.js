import { PrismaClient } from "@prisma/client";
import { BadRequest } from "../middleware/error.js";


class SaleRepository {
    static #instance;

    #saleModel;

    constructor() {
        if (!SaleRepository.#instance) {

            SaleRepository.#instance = this;
            this.#saleModel = new PrismaClient().sale;
        }

        return SaleRepository.#instance;
    }

    async createSale(body) {

        try {

            const user = await this.#saleModel.create({
                data: body,
            });

            return user;
        } catch (error) {
            throw new BadRequest(error);
        }
    }
}

export default new SaleRepository;