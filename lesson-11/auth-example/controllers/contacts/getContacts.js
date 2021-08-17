const {contact: service} = require("../../services");

const getContacts = async (req, res, next) => {
    const {_id} = req.user;
    try {
        const contacts = await service.getUserContacts(_id);
    }
    catch(error){
        next(error);
    }
};

module.exports = getContacts;