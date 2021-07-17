const {User} = require("../../models");

const register = async (req, res, next) => {
    try {
        const result = await user.findOne({email: req.body.email});
        if(result){
            res.status(409).json({
                status: "error",
                code: 409,
                message: "Already register"
            })
        }
    }
    catch(error){

    }
}