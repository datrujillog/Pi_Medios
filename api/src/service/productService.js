import productRepository from "../repository/productRepository.js";



class ProductService {
    static #instance; 

    constructor() {
        if (!ProductService.#instance) {

            ProductService.#instance = this;
        }

        return ProductService.#instance;
    }

    async createProduct(body) {        
        const productResults = await productRepository.createProduct(body);
        return productResults;
    }

}
export default new ProductService();