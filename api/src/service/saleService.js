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
        sales.forEach(sale => {
            const date = new Date(sale.saleAt);
            const year = date.getFullYear();
            const month = ("0" + (date.getMonth() + 1)).slice(-2); 
            const day = ("0" + date.getDate()).slice(-2);
            sale.saleAt = `${year}-${month}-${day}`;
        });
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
        
         const start = new Date(date);
         start.setHours(0, 0, 0, 0);
 
         const end = new Date(date);
         end.setHours(23, 59, 59, 999);

        const sales = await saleRepository.totalSales(start, end);

        sales.forEach(sale => {
            const date = new Date(sale.saleAt);
            const year = date.getFullYear();
            const month = ("0" + (date.getMonth() + 1)).slice(-2); 
            const day = ("0" + date.getDate()).slice(-2);
            sale.saleAt = `${year}-${month}-${day}`;
        });

        const total = sales.reduce((acc, sale) => {
            return acc + (sale.product.price * sale.qty);
        }, 0);





        return total;
    }

    async totalSalesMonth(year, month) {
        const startDate = new Date(Date.UTC(year, month - 1, 1));
        const endDate = new Date(Date.UTC(year, month, 1));

        const sales = await saleRepository.totalSalesMonth(startDate, endDate);
        return sales;
    }
}
export default new SaleService();