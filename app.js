import express from "express";
import morgan from "morgan";
import cors from "cors";

export const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
