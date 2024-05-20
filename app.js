const express = require('express')
const WebSocket = require('ws');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello server started');
})

const server = app.listen(3000, ()=>{
    console.log("server started at port 3000");
})

const wss  = new WebSocket.Server({server})

wss.on('connection', (ws)=>{
    console.log(`A new client is connected: ${ws}`);


    ws.send('Welcome new client ws!!');

    ws.on('message',(message)=>{
        console.log(`Client ${ws} sent message ${message}`);
    })

    ws.on('close',()=>{
        console.log(`Client ${ws} disconnected!!`);
    })

    ws.on('error',(err)=>{
        console.log(`Server responded with an error ${err}`)
    })


})