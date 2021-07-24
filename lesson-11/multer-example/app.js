const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const moment = require("moment");
const {v4} = require("uuid");

const app = express();

const tempDir = path.join(process.cwd(), "temp");
const uploadDir = path.join(process.cwd(), "upload");

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, tempDir);
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 10000
    }
})

const uploadMiddleware = multer({
    storage
});

app.use(cors());

/*
1. Создать полное имя файла (путь к новому месторасположению файла)
*/

app.post("/register", uploadMiddleware.single("avatar"), async (req, res, next) => {
    const {path: tempName, originalname} = req.file;
    const userId = v4();
    const useDirectory = path.join(uploadDir, userId);
    try {
        await fs.mkdir(useDirectory);
        const fileName = path.join(useDirectory, originalname);
        fs.rename(tempName, fileName);
        const newUser = {
            _id: userId,
            avatar: fileName
        };
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result: newUser
            }
        })
    }
    catch(error){
        fs.unlink(tempName);
    }
});

// const productsUploadMiddleware = uploadMiddleware.fields[{
//     name: "main-image",
//     maxCount: 1
// },
// {
//     name: "second-image",
//     maxCount: 1
// }];
// app.post("/products", productsUploadMiddleware, callback);

app.post("/products", uploadMiddleware.single("image"), async (req, res, next) => {
    const {path: tempName, originalname} = req.file;
    const now = moment().format("YYYY-MM-DD_hh-mm-ss");
    const fileName = `${now}_${originalname}`;
    try {
        const fullFileName = path.join(uploadDir, fileName);
        await fs.rename(tempName, fullFileName);
        const newProduct = {
            _id: req.body.name,
            image: fileName
        };
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result: newProduct
            }
        })
    }
    catch(error){
        await fs.unlink(tempName);
    }
});

const {PORT = 3000} = process.env;

app.listen(PORT);