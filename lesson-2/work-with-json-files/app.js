const products = require("./products");

(async ()=> {
    try {
        // if(options.getAll){
        // const allProducts = await products.getAll();
        // console.log(allProducts);
        // }

        // if(options.add){
        //     const newProduct = {
        //         name: options.name,
        //         price: options.price
        //     }
        // }
        // const productId = "61c0169c-e693-4a20-af3e-2e55fdc34f79";
        // const oneProduct = await products.getOne(productId);
        // console.log(oneProduct);

        // const newProduct = {
        //     name: "Pizza Margaritta",
        //     price : 5,
        //     location: "New-York"
        // };

        // const resultNewProduct = await products.add(newProduct);
        // console.log(resultNewProduct);

        // const updateProduct = {...oneProduct, price: 4};
        // const resultUpdateProduct = await products.update(productId, updateProduct);
        // console.log(resultUpdateProduct);
        
        await products.del("10819f6e-d1b8-440d-b5a5-223475e5bbca");
    }
    catch(error){
        console.log(error);
    }
    
})()



