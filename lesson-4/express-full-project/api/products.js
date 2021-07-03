const express = require("express");

const {products: ctrl} = require("../controllers");
/*
products = {
    getAll(req, res) => {
        res.json(products);
    },
    getById(req, res) => {
        res.json(products);
    },    
}
*/
const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", express.json(), ctrl.add);

router.put("/:id", express.json(), ctrl.update);

router.delete("/:id", ctrl.del);

module.exports = router;