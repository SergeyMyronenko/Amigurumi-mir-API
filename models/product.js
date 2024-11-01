import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      default: "",
      required: [true, "Enter name of product"],
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Enter price"],
    },
    price_type: {
      type: String,
      required: true,
      default: "uah",
    },
    unit: {
      type: String,
    },
    availability: {
      type: String,
      enum: ["inStok", "notAvailable", "forOrder"],
      default: "notAvailable",
    },
    isLeft: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
    },
    query: {
      type: String,
    },
    category: { type: String, required: true, default: "Основна" },
    rating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
);

export const Product = model("Product", productSchema);
