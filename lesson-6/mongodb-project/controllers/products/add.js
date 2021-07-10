const {Product} = require("../../models");

const add = async (req, res, next)=>{
    const {body} = req;
    try{
        const result = await Product.findByIdAndUpdate("60e897616021170f2428542e", body);
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result
            }
        })
    }
    catch(error){
        if(error.code === 11000){
            error.code = 400;
        }
        next(error);
    }
}

module.exports = add;