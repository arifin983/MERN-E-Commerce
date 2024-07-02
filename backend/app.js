const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const productRouter = require("./routes/product.route.js");
const userRouter = require("./routes/user.route.js");
const orderRouter = require("./routes/order.route.js");
const paymentRouter = require("./routes/payment.route.js");
const app = express();
const error = require("./middleware/error.js");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
// Config
dotenv.config({ path: "backend/config/config.env" });

app.use("/api/v1", productRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", orderRouter);
app.use("/api/v1", paymentRouter);
app.use(error);
module.exports = app;
