import express from "express";
import "dotenv/config.js";
const app = express();
app.use(express.json());

export default app;
