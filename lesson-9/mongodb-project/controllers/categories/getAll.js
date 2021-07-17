const {category: service} = require("../../services");
// /categories?name=phones
const getAll = async (req, res, next) => {
    const {query} = req;
    try{
        const result = await service.getAll();
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    }
    catch(error){
        next(error);
    }
};

module.exports = getAll;