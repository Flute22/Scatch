import express from "express";
import dotenv from "dotenv"; 
dotenv.config();
import cookieParser from "cookie-parser";
import path from "path";
import ownerRouter from "./routes/ownerRouter.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";


const app = express();
const PORT = process.env.PORT || 4000;

import db from "./config/mongoose-connection.js";
db()

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owner", ownerRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);



app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});