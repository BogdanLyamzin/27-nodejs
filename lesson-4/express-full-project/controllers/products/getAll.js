const products = require("../../data/products");
// /products
// /products?brand=Apple&priceFrom=10000&priceTo=20000
const getAll = (req, res) => {
    // console.log(req.query);
    /*
    /products?brand=Apple&priceFrom=10000&priceTo=20000
    req.query = {
        brand: "Apple",
        priceFrom: 10000,
        priceTo: 20000
    }
    */
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products
        }
    });
}

module.exports = getAll;