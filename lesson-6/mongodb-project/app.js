const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

const api = require("./api");

const app = express();

app.use(cors());
// /api/v1/books
// /api/v1/products/1
app.use("/api/v1/products", api.products);

app.use((_, res)=>{
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found"
    })
});

app.use((error, _, res, __)=>{
    const {code = 500, message = "Server error"} = error;
    res.status(code).json({
        status: "fail",
        code,
        message
    })
});

const {DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("Database running");
    app.listen(PORT);
})
.catch(error => console.log(error))