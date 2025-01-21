import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/authenticatioin.routes";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3002

app.use("api/auth",authRoutes);

app.listen(PORT,() => {
    console.log("http-backend in running");
})