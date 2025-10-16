import express from "express";
import Product from "../models/productmodel.js";

const router = express.Router();

// List products with pagination
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  // const limit = parseInt(req.query.limit) || 10;
  try {
    const products = await Product.find()
      .skip((page - 1) )
     // .skip((page - 1) * limit)
      // .limit(limit);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search products with filters
router.get("/search", async (req, res) => {
  const { brand, color, minPrice, maxPrice } = req.query;
  const filter = {};
  if (brand) filter.brand = brand;
  if (color) filter.color = color;
  if (minPrice || maxPrice) filter.price = {};
  if (minPrice) filter.price.$gte = parseFloat(minPrice);
  if (maxPrice) filter.price.$lte = parseFloat(maxPrice);

  try {
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
