import express from "express";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/", addProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:productId", getProductById);
productRouter.put("/:productId", editProduct);
productRouter.delete("/:productId", deleteProduct);

export default productRouter;
