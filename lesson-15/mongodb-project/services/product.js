const {Product} = require("../models");

const getAll = (page, perPage)=>{
    const skip = (page - 1) * perPage;
    return Product.find({}, {skip, limit: perPage}).populate("category", "name");
    /*
    {
        name: "iPhone X",
        price: 20000,
        category: "gghgsdfaqgedd"
    }
    */
}

const add = (newProduct)=>{
    return Product.create(newProduct);
};

module.exports = {
    getAll,
    add,    
}