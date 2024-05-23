import { PrismaClient } from '@prisma/client';
import  products  from './data/products.js';
// import products from '../data/products.js';

const prisma = new PrismaClient();

const loadProducts = async () => {
    for (const product of products) {
        await prisma.product.create({ data: product });
    }
    console.log('Products loaded');
};

loadProducts().catch(e => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});


export default loadProducts;
