const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

const {DB_HOST} = process.env;

const {Schema, model} = mongoose;

const userSchema = Schema({
    name: String,
    age: Number
});

const User = model("user", userSchema);

const categorySchema = Schema({
    name: String
});

const Category = model("category", categorySchema);

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(async ()=> {
    const newCategory = {
        name: "Phones"
    }
    try {
        const result = await Category.create(newCategory)
    }
    catch(error){
        console.log(error)
    }
    // const newUser = {
    //     name: "Анна",
    //     age: 29
    // }
    // try {
    //     const result = await User.create(newUser);
    //     console.log(result)
    // }
    // catch(error){
    //     console.log(error);
    // }
    // User.create(newUser, (error, data)=> {
    //     if(error){
    //         console.log(error);
    //         return;
    //     }
    //     console.log(data)
    // });
})
    .catch(error => console.log(error))