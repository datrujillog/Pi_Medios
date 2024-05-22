import { response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import env from "../config/env.js";

const errorResponse = (res = response, error) => {
    if (error.hasOwnProperty("code") || error.hasOwnProperty("errors")) {
        if (error.code === "P2002") {
            return res.status(400).json({
                ok: false,
                errors: Object.keys(error.meta.target).map((field) => ({
                    message: `The ${field} ${error.meta.target[field]} is already in use`,
                    field,
                })),
            });
        }
        if (error.code === "P2025") {
            return res.status(400).json({
                ok: false,
                errors: [{ message: error.meta.cause || error.message }],
            });
        }

        if (error.code === 404 || error.code === "404") {
            return res.status(404).json({
                ok: false,
                errors: [{ message: error.message || error.errors }],
            });

        }

        return res.status(400).json({
            ok: false,
            errors: [{ message: error.message || error.errors }],
        });
    }
    return res.status(500).json({
        ok: false,
        errors: [{ message: error.message || error }],
    });
};




export { errorResponse };
