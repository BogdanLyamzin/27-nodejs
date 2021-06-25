const fs = require("fs").promises;

const productsPath = require("./productsPath");

const updateProducts = async(products) => {
    const str = JSON.stringify(products);
    try {
        await fs.writeFile(productsPath, str);
    } 
    catch (error) {
        throw error;
    }
};

module.exports = updateProducts;