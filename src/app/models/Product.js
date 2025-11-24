import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, default: "" },
    image: { type: String, required: true }, 
  },
  { versionKey: false, timestamps: true } // adds createdAt + updatedAt automatically
);
export default mongoose.models.Product || mongoose.model("Product",ProductSchema);