import express from "express";
import { fetchContentAmazonSearch } from "../utils/fetchContentAmazonSearch.js";

// Creating a new router
export const router = express.Router();

// GET /api/scrape
router.get("/scrape", async (req, res) => {
  const { keyword } = req.query;
  const products = await fetchContentAmazonSearch(keyword);
  res.json(products);
});
