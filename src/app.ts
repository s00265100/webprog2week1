import express, {Application, Request, Response} from "express";

import carRoutes from './routes/cars';

import swaggerUi from 'swagger-ui-express';
import {swaggerSpec} from './config/swagger';
import cors from 'cors';
import { authenticateKey } from './middleware/auth.middleware';


export const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/cars', authenticateKey, carRoutes);
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerSpec)
);





app.get("/ping", async (_req : Request, res: Response) => {
    res.json({
    message: "hello from Mansura"
    });
});
app.get('/bananas', async (_req : Request, res: Response) => {
    res.json({
    message: "this is bananas",
    });
});
app.get('/Mangos', async (_req : Request, res: Response) => {
    res.json({
    message: "I love Mangos",
    });
});

app.use((req, _res, next) => {  
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});
