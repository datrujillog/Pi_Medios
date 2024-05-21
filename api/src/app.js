import express from "express";
import morgan from "morgan";
import cookie from "cookie-parser";
import cors from 'cors';


const app = express();

//middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());


// use router


// Middleware de manejo de errores
app.use((error, req, res, next) => {
    console.error(error.message);
    res.status(500).json({ message: error.message || error });
});

export default app;