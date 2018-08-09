
const express 	= require("express");
const app 	= express();
const PORT 	= process.env.PORT;

// Socket.io
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get("/", (req, res) => {
	res.sendFile(__dirname + '/htmls/index.html');
});

io.on('connection', function(socket) {
	socket.on('chat message', function(msg) {
		io.emit('chat message', msg);
	});
});

app.listen(PORT);
