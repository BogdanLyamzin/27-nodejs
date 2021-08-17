const {NotFound} = require("http-errors");
const {category: service} = require("../../services");

const getById = async (req, res, next) => {
    const {id} = req.params;
    const result = await service.getById(id);
    if(!result){
        throw new NotFound(`Category with ${id} not found`);
    };
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
};

module.exports = getById;