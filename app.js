import express from "express";
import morgan from "morgan";
import cors from "cors";
import productRouter from "./routes/productRoutes.js";
import categoryRouter from "./routes/categoryRouter.js";

export const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/products/", productRouter);
app.use("/api/categories/", categoryRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
