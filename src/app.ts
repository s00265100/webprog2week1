import express, {Application, Request, Response} from "express";
import { env } from "./config/env";
import carRoutes from './routes/cars';
import { connectDB } from "./config/database";
import swaggerUi from 'swagger-ui-express';
import {swaggerSpec} from './config/swagger';

import { authenticateKey } from './middleware/auth.middleware';
const PORT = env.port;

export const app: Application = express();
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerSpec)
);


app.use(express.json()); 
app.use('/api/v1/cars',authenticateKey, carRoutes); 


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
app.get("/pong", (_req : Request, res: Response) => {
    console.log("Recived request to /pong");
    throw new Error("This is a tesSimulated error in /pong route");
}),

app.get ("/pung",async (_req : Request, res: Response) => {
    console.log("Recived request to /pung");
    throw new Error("Simulated error in /pung route");
})
