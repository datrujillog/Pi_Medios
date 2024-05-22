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

    async listSales() {

        try {

            const sales = await this.#saleModel.findMany({
                include: {
                    product: {
                        select: {
                            name: true,
                            price: true,
                        },
                    },
                    user: {
                        select: {
                            name: true,
                            lastName: true,
                        },
                    },
                },
            });
            return sales;
            
        } catch (error) {
            throw new BadRequest(error);
        }
    }

    async updateSale(id, body) {

        try {

            const sale = await this.#saleModel.update({
                where: {
                    id: id,
                },
                data: body,
            });

            return sale;
        } catch (error) {
            throw new BadRequest(error);
        }
    }
}

export default new SaleRepository;