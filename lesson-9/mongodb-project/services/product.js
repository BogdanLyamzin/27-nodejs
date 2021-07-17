const {Product} = require("../models");

const getAll = ()=>{
    return Product.find({}).populate("category", "name");
}

const add = (newProduct)=>{
    return Product.create(newProduct);
};

module.exports = {
    getAll,
    add,    
}