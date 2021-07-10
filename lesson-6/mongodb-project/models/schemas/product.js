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
    article: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator(value) {
              return (value.length === 8);
            },
            message: props => `${props.value} is not a valid phone number!`
          },
    },
    active: {
        type: Boolean,
        default: true
    },
    status: {
        type: String,
        enum: ["basic", "stock", "less"],
        default: "basic"
    }
}, { versionKey: false, timestamps: true });

module.exports = productSchema;