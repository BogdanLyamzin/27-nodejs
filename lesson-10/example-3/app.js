const jwt = require("jsonwebtoken");
require("dotenv").config();

const headers =  {
    "alg": "AE256",
    "typ": "JWT"
};

const payload = {
    id: "60620c38dafd60282cb6a78c"
};

const {SECRET_KEY} = process.env;

const token = jwt.sign(payload, SECRET_KEY);
// console.log(token);

const decodeToken = jwt.decode(`${token}`);
// console.log(decodeToken);

try {
    // const result = jwt.verify(`${token}2`, SECRET_KEY);
    const result = jwt.verify(token, SECRET_KEY);
    console.log(result);
}
catch(error){
    console.log(error);
}

