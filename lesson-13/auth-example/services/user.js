// const bcrypt = require("bcryptjs");

const {User} = require("../models");
/*
email: ""
*/

const getById = (id) => User.findById(id);

const getOne = (filter) => {
    return User.findOne(filter);
};

const add = ({password, ...other})=>{ // other = {email, verifyCode}
    const newUser = new User(other);
    newUser.setPassword(password);
    return newUser.save();
    // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    // return User.create({email, password: hashPassword});
}

const updateById = (id, updateInfo) => {
    return User.findByIdAndUpdate(id, updateInfo)
}

module.exports = {
    getOne,
    add,
    getById,
    updateById
}