import express from 'express';

import userRouter from './userRouter.js';
import roleRouter from './roleRouter.js';
import productRouter from './productRouter.js';

const router = express.Router();

//userRouter
router.use('/api/v1/users', userRouter);


//roleRouter
router.use('/api/v1/roles', roleRouter);

//productRouter
router.use('/api/v1/products', productRouter);

export default router;