
import express, { Application, Request, Response } from "express";

import carRoutes from './routes/cars';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';

import { errorHandler } from './middleware/error.middleware';

import { authenticateKey } from './middleware/auth.middleware';

export const app: Application = express();

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

app.use(express.json());

app.use('/api/v1/cars', authenticateKey, carRoutes);

app.get("/ping", async (_req: Request, res: Response) => {
    res.json({
        message: "hello from Mansura"
    });
});

app.get('/bananas', async (_req: Request, res: Response) => {
    res.json({
        message: "this is bananas",
    });
});

app.get('/Mangos', async (_req: Request, res: Response) => {
    res.json({
        message: "I love Mangos",
    });
});

app.get("/pong", (_req: Request, _res: Response) => {
    console.log("Received request to /pong");
    throw new Error("Simulated error in /pong route");
});

app.get("/pung", async (_req: Request, _res: Response) => {
    console.log("Received request to /pung");
    throw new Error("Simulated error in /pung route");
});


app.use(errorHandler);
