const {category: service} = require("../../services");
// /categories?name=phones
const getAll = async (req, res, next) => {
    const {page, perPage} = req.query;
    const result = await service.getAll(page, perPage);
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    });
};

module.exports = getAll;