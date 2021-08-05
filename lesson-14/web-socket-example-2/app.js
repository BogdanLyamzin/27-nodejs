const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const clients = [];

wsServer.on("connection", (newClient) => {
    clients.push(newClient);
    newClient.send("Добро пожаловать в наш чат!");
    const {length: newClientNumber} = clients;
    clients.forEach(client => {
        if(client !== newClient){
            client.send(`Подключился ${newClientNumber} пользователь!`)
        }
    });
});