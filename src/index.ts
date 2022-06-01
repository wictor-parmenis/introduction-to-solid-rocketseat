import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";

import { usersRoutes } from "./routes/users.routes";
import AppError from "./shared/AppError";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use(
  (error: Error, _request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        error: error.error,
        category: error.category,
        messages: error.messages,
      });
    }
    console.log(error);
    return response.status(500).json({
      status: "error",
      message: "Internal server  error",
      category: "INTERNAL_ERROR",
    });
  }
);

export { app };
