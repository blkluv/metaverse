var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http,{
      cors: {
            origin: "*",
            methods: ["GET", "POST"],
            allowedHeaders: ["*"]
          }
});


io.on('connection', (socket)=> {
      console.log('User Online');

      socket.on('canvas-data', (data)=> {
            socket.broadcast.emit('canvas-data', data);
            
      })
})

var server_port = process.env.YOUR_PORT || process.env.PORT || 1000;
http.listen(server_port, () => {
    console.log("Started on : "+ server_port);
})