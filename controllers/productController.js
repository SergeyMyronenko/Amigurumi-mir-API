import { Product } from "../models/product.js";
import HttpError from "../utils/HttpError.js";

export const addProduct = async (req, res, next) => {
  const {
    title,
    description,
    price,
    price_type,
    unit,
    availability,
    isLeft,
    image,
    query,
    category,
    rating,
    reviews,
  } = req.body;

  try {
    const data = {
      title,
      description,
      price,
      price_type,
      unit,
      availability,
      isLeft,
      image,
      query,
      category,
      rating,
      reviews,
    };

    if (!title || !price) {
      throw HttpError(400, "Title, price, and category are required fields.");
    }

    const newProduct = await Product.create(data);

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Product.find();
    if (!allProducts) {
      throw HttpError(404, "Not found");
    }

    res.status(200).send(allProducts);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);

    if (!product) {
      throw HttpError(404, "Not found");
    }

    res.status(200).send(product);
  } catch (error) {
    next(error);
  }
};

export const editProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);

    if (!product) {
      throw HttpError(404, "Not found");
    }

    const result = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);

    if (!product) {
      throw HttpError(404, "Not found");
    }

    const result = await Product.findByIdAndDelete(productId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
