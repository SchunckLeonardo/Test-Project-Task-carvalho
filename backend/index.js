import express from "express";
import { router } from "./src/routes/routes.js";
import cors from 'cors'

const app = express();

// Configuring express to use JSON and CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// Configuring express to use routes
app.use("/api", router);

app.listen(5500, () => {
  console.log('Server is running on port 5500')
})
