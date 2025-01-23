import mongoose from "mongoose";

let ProductSchema = new mongoose.Schema({
  img: String,
  name: String,
  price: Number,
});

export let ProductModel = mongoose.model("product", ProductSchema);
