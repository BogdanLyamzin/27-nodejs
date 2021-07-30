const ws = new require("ws");

const WsServer = new ws.Server({port: 5000});

WsServer.on("connection", (server)=> {
    setTimeout(() => {
        server.send("Добро пожаловать в наш чат!");
    }, 4000);

    server.on("message", (message) => {
        console.log(message);
    });
});