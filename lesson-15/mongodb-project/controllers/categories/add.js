const {BadRequest} = require("http-errors");
const {category: service} = require("../../services");

const add = async (req, res, next) => {
    const {body} = req;
    const result = await service.add(body);
    if(!result){
        throw new BadRequest();
    }
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result
        }
    });
};

module.exports = add;