const {user: service} = require("../../services");

const login = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const user = await service.getOne({email});

        if(!user || !user.comparePassword(password)) {
            res.status(400).json({
                status: "error",
                code: 400,
                message: "Неверный email или пароль"
            });
        }
        const token = "23252323423423423.ffgsfgshfsgsdfsdg.343423423333d";
        res.json({
            status: "success",
            code: 200,
            data: {
                result: token
            }
        })
        // if(!user) {
        //     res.status(400).json({
        //         status: "error",
        //         code: 400,
        //         message: "Пользователя с таким email не существует"
        //     });
        //     return;
        // }
        // if(!user.comparePassword(password)){
        //     res.status(400).json({
        //         status: "error",
        //         code: 400,
        //         message: "Неверный пароль"
        //     });
        //     return;
        // }
    }
    catch(error){
        next(error);
    }

};

module.exports = login;