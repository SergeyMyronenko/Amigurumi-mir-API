import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Enter name of category"],
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      default: "../image/emptyImg.png",
    },
    subcategory: [
      {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

export const Category = model("Category", categorySchema);
