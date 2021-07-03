const products = require("../../data/products");

const update = (req, res) => {
    const {id} = req.params;
    const index = products.findIndex(item => item._id === id);
    if(index === -1) {
        res.status(404).json({
            status: "error",
            code: 404,
            message: "Not found"
        });
        return;
    }
    products[index] = {...req.body, _id: id};
    res.json({
        status: "success",
        code: 200,
        data: {
            result: products[index]
        }
    })
}

module.exports = update;