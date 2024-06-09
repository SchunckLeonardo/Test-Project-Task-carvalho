import express from "express";
import { fetchContentAmazonSearch } from "../utils/fetchContentAmazonSearch.js";

export const router = express.Router();

router.get("/scrape", async (req, res) => {
  const { keyword } = req.query;
  const products = await fetchContentAmazonSearch(keyword);
  res.json(products);
});
