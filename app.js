const express = require('express');

const http = require('http');
const route = require('./routes')
console.log(route.someText)
const app = express();
app.use((req,res,next)=>{
    console.log('i am a debugger');
    next();

})

app.use((req,res,next)=>{
    res.send('Hello from the expressjs')

})


const server = http.createServer(app);
server.listen(3000);