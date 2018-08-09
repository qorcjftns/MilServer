
const express 	= require("express");
const app 	= express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT 	= process.env.PORT || 3000;


app.get("/", (req, res) => {
	res.sendFile(__dirname + '/htmls/index.html');
});

app.get("/keyboard", (req, res) => {
	var data = {
		'type': 'buttons',
		'buttons': ['과일', '채소', '정보']
	};
	res.json(data);
});

app.get("/message", (req, res) => {
	var data = {
		'type': 'buttons',
		'buttons': ['과일', '채소', '정보']
	};
	res.json(data);
});


io.on('connection', function(socket) {
	socket.on('chat message', function(msg) {
		io.emit('chat message', msg);
	});
});

server.listen(PORT, function() {
	console.log('listening on *:' + PORT);
});

const kakao_keyboard = require('./api/kakao/keyboard');
const kakao_message = require('./api/kakao/message');
