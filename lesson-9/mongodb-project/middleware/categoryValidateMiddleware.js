const {category} = require("../models/schemas");
const {validateCategory} = category;

const categoryValidateMiddleware = (req, res, next) =>{
    const error = validateCategory(req.body);
    if(error) {
        res.status(400).json({
            status: "error",
            code: 400,
            message: error.message
        })
    }
    next();
};

module.exports = categoryValidateMiddleware;