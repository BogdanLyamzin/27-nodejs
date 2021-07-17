const {User} = require("../../models");

const getOne = async (req, res, next) =>{
    try{
        const user = await User.findOne(req.body);
    }
    catch(error){
        next(error);
    }
};

