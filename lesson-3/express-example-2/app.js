const express = require("express");
const cors = require("cors");

const products = require("./products");

const app = express();

// app.set("json spaces", 2);
// app.set("json replacer", "replacer");

app.use(cors());

app.get("/products", (req, res)=>{
    res.json(products);
    // res.json(null);
    // res.send(null);
})

const {PORT = 3000} = process.env;

app.listen(PORT);