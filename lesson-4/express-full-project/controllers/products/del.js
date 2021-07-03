const products = require("../../data/products");

const del = (req, res)=>{
    const {id} = req.params;
    const index = products.findIndex(item => item._id === id);
    console.log(index);
    if(index === -1) {
        res.status(404).json({
            status: "error",
            code: 404,
            message: "Not found"
        });
        return;
    }
    // const newProducts = products.filter(item => item._id !== id); 
    products.splice(index, 1);
    res.status(200).json({
        status: "success",
        code: "200",
        message: "No Content"
    });
}

module.exports = del;