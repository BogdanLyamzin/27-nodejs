const fs = require("fs");
// const str = "work";
// const strBuffer = Buffer.from(str);
// console.log(strBuffer);
// console.log(strBuffer.toString());

fs.readFile("file.txt", "utf-8", (error, data)=> {
    if(error){
        console.log(error);
        return;
    }
    console.log(data);
})
// 010011101001

/*
UTF-8
d0 - Н
f6 - А
*/