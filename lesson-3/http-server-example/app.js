const http = require("http");

const server = http.createServer((request, response)=>{
    if(request.url === "/"){
        response.write("<h2>Home page</h2>");
    } else if(request.url === "/contacts"){
        response.write("<h2>Contacts page</h2>");
    }
    else {
        response.write("<h2>Page not found</h2>");
    }
    
    response.end();
}).listen(3000);


// const server = http.createServer((request, response)=>{
//     console.log(`Request url: ${request.url}`);
//     console.log(`Браузер пользователя: ${request.headers["user-agent"]}`);
//     console.log(`Метод запроса: ${request.method}`);

//     response.write("<h2>Welcome to hell</h2>");
//     response.end();
// }).listen(3000);

