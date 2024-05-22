import express from 'express';

import userRouter from './userRouter.js';
import roleRouter from './roleRouter.js';

const router = express.Router();

//userRouter
router.use('/api/v1/users', userRouter);


//roleRouter
router.use('/api/v1/roles', roleRouter);

export default router;