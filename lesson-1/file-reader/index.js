const fs = require("fs");

fs.readFile("files/read.txt", "utf-8", (error, data)=> {
    console.log(error)
    if(error){
        console.log(error.message);
        return;
    }
    console.log(data);
})

// const data = fs.readFileSync("files/read.txt", "utf-8");
// console.log(data)