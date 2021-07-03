const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");

const api = require("./api");

const app = express();

app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());

app.use("/api/v1/products", api.products);
app.use("/api/v1/carts", api.carts);
app.use("/api/v1/customers", api.customers);

const {PORT = 3000} = process.env;

app.listen(PORT);