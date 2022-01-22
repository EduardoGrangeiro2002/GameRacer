import  Express, { NextFunction, Request, Response }  from "express";

import "express-async-errors"

import { appError } from "./Error/AppError"

const app = Express()

const PORT = 3333;


app.use(Express.json())

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if(err instanceof appError) {
            return response.status(err.statusCode).json({message: err.message})
        }
        return response.status(500).json({
            status:  "error",
            message: `Internal server error ${err.message}`
        });
    }
)

app.listen(PORT, () => console.log(`Server is running in PORT: ${PORT}`) )
