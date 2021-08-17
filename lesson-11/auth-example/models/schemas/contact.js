const {Schema} = require("mongoose");

const contactSchema = Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
});

module.exports = contactSchema;