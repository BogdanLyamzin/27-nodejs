const getAll = require("./getAll");

const getOne = async (id)=> {
    try {
        const products = await getAll();
        const findProduct = products.find(item => item.id === id);
        if(!findProduct) {
            throw new Error("Id incorrect");
        }
        return findProduct;
    } 
    catch (error) {
        throw error;
    }
}

module.exports = getOne;