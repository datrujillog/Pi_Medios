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

    async updateSale(id, body) {
        const sale = await saleRepository.updateSale(id, body);
        return sale;
    }

    async deleteSale(id) {
        const sale = await saleRepository.deleteSale(id);
        return sale;
    }

    async totalSales(date) {
        // const startDate = new Date(date);
        // const endDate = new Date(date);
        // endDate.setDate(endDate.getDate()+1);


        const startDate = new Date(date);
        startDate.setUTCHours(0, 0, 0, 0);  
        const endDate = new Date(startDate);
        endDate.setUTCHours(23, 59, 59, 999); 


        const sales = await saleRepository.totalSales(startDate, endDate);
        return sales;
    }
}
export default new SaleService();