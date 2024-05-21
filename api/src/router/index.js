import express from 'express';

import userRouter from './userRouter.js';

const router = express.Router();

router.use('/api/v1/users', userRouter);

export default router;