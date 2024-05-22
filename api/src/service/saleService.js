import saleRepository from "../repository/saleRepository.js";



class SaleService {
    static #instance; 

    constructor() {
        if (!SaleService.#instance) {

            SaleService.#instance = this;
        }

        return SaleService.#instance;
    }

    async createSale(body) {        
        const saleResults = await saleRepository.createSale(body);
        return saleResults;
    }

    async listSales() {
        const sales = await saleRepository.listSales();
        return sales;
    }
}
export default new SaleService();