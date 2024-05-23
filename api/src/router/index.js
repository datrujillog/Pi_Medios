import express from 'express';

import userRouter from './userRouter.js';
import roleRouter from './roleRouter.js';
import productRouter from './productRouter.js';
import saleRouter from './saleRouter.js';

const router = express.Router();

//userRouter
router.use('/api/v1/users', userRouter);


//roleRouter
router.use('/api/v1/roles', roleRouter);

//productRouter
router.use('/api/v1/products', productRouter);


//salesRouter
router.use('/api/v1/sales', saleRouter);

export default router;