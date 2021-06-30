const express = require("express");
const fs = require("fs").promises;

const app = express();

/*
Что делать при запрое на какой адрес и
при каком методе запроса (GET, POST, PUT, DELETE, PATCH)
*/

app.use((req, res, next)=>{
    console.log("First middleware");
    next();
});
/*
app.req,
app.res,
app.next
app.middleware = [()=> {}, ()={}]
*/
app.use(async(req, res, next)=>{
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const date = `${year}:${month}:${day}-${hours}_${minutes}_${seconds}-${req.url}`;
    try {
        await fs.appendFile("server.log", `${date}\n`);
    }
    catch(error){
        await fs.appendFile("server.log", `${error.message}\n`);
    }
    req.user = "Смешной медведь";
    next();
});
// /produts /products/1 /products/1/reviews
app.use("/products", (req, res)=>{

})

app.get("/", (req, res)=>{
    res.send("<h2>Home page</h2>");
});

app.get("/about", (req, res)=>{
    res.send("<h2>About page</h2>");
});

app.get("/contacts", (req, res)=>{
    console.log(req.user);
    res.send("<h2>Contacts page</h2>");
});

const {PORT = 3000} = process.env;

app.listen(PORT);