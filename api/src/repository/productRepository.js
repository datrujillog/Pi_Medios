import { PrismaClient } from "@prisma/client";
import { BadRequest } from "../middleware/error.js";


class ProductRepository {
    static #instance;

    #productModel;

    constructor() {
        if (!ProductRepository.#instance) {

            ProductRepository.#instance = this;
            this.#productModel = new PrismaClient().product;
        }

        return ProductRepository.#instance;
    }

    async createProduct(body) {

        try {
            delete body.id;
            const productResults = await this.#productModel.create({
                data:{
                    name: body.name,
                    description: body.description,
                    price: parseInt(body.price),
                },
            });
            return productResults;

        } catch (error) {
            throw new BadRequest(error);
        }
    }

    async listProducts() {

        try {

            const productResults = await this.#productModel.findMany();
            return productResults;

        } catch (error) {
            throw new BadRequest(error);
        }
    }

}

export default new ProductRepository;