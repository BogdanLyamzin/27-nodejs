const {v4} = require("uuid");

const getAll = require("./getAll");
const updateProducts = require("./updateProducts");

const add = async(obj)=>{
    const newProduct = {...obj, id: v4()};
    try {
        const products = await getAll();
        const newProducts = [...products, newProduct];
        await updateProducts(newProducts);
        return newProduct;
    }
    catch(error){
        throw error;
    }
}

module.exports = add;