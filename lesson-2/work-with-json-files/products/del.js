const getAll = require("./getAll");
const updateProducts = require("./updateProducts");

const del = async(id)=>{
    try {
        const products = await getAll();
        const index = products.findIndex(item => item.id === id);
        if(index === -1){
            throw new Error("Id incorrect");
        }
        const filteredProducts = products.filter(item => item.id !== id);
        await updateProducts(filteredProducts);
    } catch (error) {
        throw error;
    }
}

module.exports = del;