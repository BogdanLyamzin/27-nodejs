// const fs = require("fs/promises");
const fs = require("fs").promises;

// const file = fs.readFile("files/read.txt", "utf-8");

// file.then(data => console.log(data))
//     .catch(error => console.log(error));

(async ()=>{
    try {
        const data = await fs.readFile("files/read.txt", "utf-8");
        console.log(data);
    }
    catch(error){
        console.log(error.message);
    }
})()