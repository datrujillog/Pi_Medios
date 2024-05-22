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
            const sale = await this.#saleModel.create({
                data: {
                    qty: body.qty,
                    usersId: body.usersId,
                    productsId: body.productId
                },
            });

            return sale;
        } catch (error) {
            throw new BadRequest(error.message);
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
            console.log(error);
            throw new BadRequest(error);
        }
    }

    async updateSale(id, body) {

        try {

            const sale = await this.#saleModel.update({
                where: {
                    id: id,
                },
                data: {
                    qty: body.qty,
                    usersId: body.usersId,
                    productsId: body.productId
                },
            });

            return sale;
        } catch (error) {
            throw new BadRequest(error);
        }
    }

    async deleteSale(id) {

        try {

            const sale = await this.#saleModel.delete({
                where: {
                    id: id,
                },
            });

            return sale;
        } catch (error) {
            throw new BadRequest(error);
        }
    }

    async totalSales(start, end) {

        try {

            const sales = await this.#saleModel.findMany({
                where: {
                    saleAt: {
                        gte: start.toISOString(),
                        lt: end.toISOString(),
                    },
                },
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

    async totalSalesMonth(startDate, enDate) {

        try {

            const sales = await this.#saleModel.findMany({
                where: {
                    saleAt: {
                        gte: startDate.toISOString(),
                        lt: enDate.toISOString(),
                    },
                },
                include: {
                    product:true,
                },
            });

            const total = sales.reduce((acc, sale) => {
                return acc + (sale.product.price * sale.qty);
            }, 0);

            return total;
        } catch (error) {
            throw new BadRequest(error);
        }
    }
}

export default new SaleRepository;