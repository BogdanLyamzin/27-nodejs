const {Contact} = require("../models");

const getUserContacts = (id) => {
    return Contact.find({owner: id});
};

module.exports = getUserContacts;