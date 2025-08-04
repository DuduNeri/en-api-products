import express, { Router } from "express";
import router from "./routes/productRoute";


const app = express();

app.use(express.json());
app
app.use("/products", router);


export default app;
