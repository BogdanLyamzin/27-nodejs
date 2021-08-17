const {Schema} = require("mongoose");

const productSchema = Schema({
    name: {
        type: String,
        minlength: [2, "Имя товара должно содержать минимум 2 буквы"],
        required: [true, "Имя товара должно быть указано"],
    },
    price: {
        type: Number,
        min: 0.01,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true
    }
}, { versionKey: false, timestamps: true });

module.exports = productSchema;