import { Product } from "../models/product";

const addProduct = async (req, res, next) => {
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

    const newProduct = await Product.create(data);

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};
