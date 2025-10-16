import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";
import dotenv from "dotenv";
dotenv.config();


import "./config/mongoose-connections.js";
import productRouter from "./routes/productRouter.js";
import uploadRouter from "./routes/uploadRouter.js";

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "some-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());
app.set("view engine", "ejs");

// Routes
app.use("/products", productRouter);
app.use("/upload", uploadRouter);

app.get("/", (req, res) => {
  res.render("index"); // this will render views/index.ejs
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
