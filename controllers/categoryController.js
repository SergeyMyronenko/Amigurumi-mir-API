import { Category } from "../models/categories.js";
import HttpError from "../utils/HttpError.js";

export const addCategory = async (req, res, next) => {
  const { name, description, subcategory } = req.body;

  try {
    const data = { name, description };

    if (!name) {
      throw HttpError(400, "Name title is required field");
    }

    const copyNameCategory = await Category.findOne({ name });

    if (copyNameCategory) {
      throw HttpError(400, "Category name is allready exist");
    }

    const newCategory = await Category.create(data);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    const allCategories = await Category.find();

    if (!allCategories) {
      throw HttpError(404, "Not found");
    }

    res.status(200).send(allCategories);
  } catch (error) {
    next(error);
  }
};

export const getCategoryById = async (req, res, next) => {
  const { categoryId } = req.params;
  try {
    if (!categoryId) {
      throw HttpError(404, "Category id not found");
    }

    const currentCategory = await Category.findById(categoryId);
    res.status(200).send(currentCategory);
  } catch (error) {
    next(error);
  }
};

export const editCategory = async (req, res, next) => {
  const { categoryId } = req.params;
  try {
    if (!categoryId) {
      throw HttpError(404, "Category id not found");
    }

    const result = await Category.findByIdAndUpdate(categoryId);
    res.status(200).send(result, {
      new: true,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  const { categoryId } = req.params;
  try {
    if (!categoryId) {
      throw HttpError(404, "Category id not found");
    }

    const result = await Category.findByIdAndDelete(categoryId);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
