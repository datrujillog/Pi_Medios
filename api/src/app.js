import express from "express";
import morgan from "morgan";
import cookie from "cookie-parser";
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from "./helper/swagger/swagger.js";

import router from './router/index.js';


const app = express();

//middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());


// use router
app.use(router);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((error, req, res, next) => {
    console.error(error.message);
    res.status(500).json({ message: error.message || error });
});

export default app;