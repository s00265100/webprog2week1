import express, {Application, Request, Response} from "express";
import { env } from "./config/env";
import carRoutes from './routes/cars';

const PORT = env.port;

const app: Application = express();

app.use('/api/v1/cars', carRoutes); 
app.use(express.json()); 

app.get("/ping", async (_req : Request, res: Response) => {
    res.json({
    message: "hello from Mansura "
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
//comment
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
    });

