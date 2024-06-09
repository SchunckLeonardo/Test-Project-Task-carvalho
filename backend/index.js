import express from "express";
import { router } from "./src/routes/routes.js";
import { fetchContentAmazonSearch } from "./src/utils/fetchContentAmazonSearch.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

fetchContentAmazonSearch('iphone')

app.listen(5500, () => {
  console.log('Server is running on port 5500')
})
