const {product: service} = require("../../services");

const getAll = async (req, res, next) => {
    const {page = 1, perPage = 20} = req.query;
    const result = await service.getAll(page, perPage);
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
};

module.exports = getAll;