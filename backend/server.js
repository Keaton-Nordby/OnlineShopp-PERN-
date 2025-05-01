import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT);

app.use(express.json());
app.use(cors());
app.use(helmet()); // helmet is a security middleware that helps protect the app by setting various HTTP headers -> this is my first time using this
app.use(morgan("dev")); // logs requests to the console -> also the first time using this

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
