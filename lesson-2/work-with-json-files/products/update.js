const getAll = require("./getAll");
const updateProducts = require("./updateProducts");

const update = async(id, upProduct)=> {
    try {
        const products = await getAll();
        const index = products.findIndex(item => item.id === id);
        if(index === -1){
            throw new Error("Id incorrect");
        }
        products[index] = {...upProduct, id};
        await updateProducts(products);
        return products[index];
    }
    catch(error){
        throw error;
    }
}

module.exports = update;