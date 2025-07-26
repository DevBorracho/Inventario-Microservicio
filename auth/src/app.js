import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import router from "./router/user.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/auth/", router);

export default app;
