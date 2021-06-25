const fs = require("fs").promises;
// const fs = require("fs/promises");


(async()=> {
    // try {
    //     const data = await fs.readFile("file.txt", "utf8");
    //     console.log(data);
    // }
    // catch(error){
    //     console.log(error);
    // }

    // try{
    //     await fs.appendFile("file.txt", "\nНо он не сдается и читает Ницше");
    // }
    // catch(error){
    //     console.log(error);
    // }

    try {
        const data = await fs.writeFile("file.txt", "Так говорил Заратустра");
       console.log(data);
    }
    catch(error){
        console.log(error);
    }
})()

// const fileRead = fs.readFile("file.txt", "utf-8");

// fileRead
//     .then(data => console.log(data))
//     .catch(error => console.log(error))