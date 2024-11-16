import express from "express";
import {
  addCategory,
  deleteCategory,
  editCategory,
  getAllCategories,
  getCategoryById,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/", addCategory);
categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:categoryId", getCategoryById);
categoryRouter.put("/:categoryId", editCategory);
categoryRouter.delete("/:categoryId", deleteCategory);

export default categoryRouter;
