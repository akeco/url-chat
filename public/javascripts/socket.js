var server = require('../../bin/www');
var io = require('socket.io').listen(server);
var {registration} = require('../../services/registration');
var randomstring = require('randomstring');
var axios = require('axios');
var addRoom = require('../../services/addRoom');
var saveMessage = require('../../services/saveMessage');
var leaveRoom = require('../../services/leaveRoom');
var joinRoom = require('../../services/joinRoom');
var getActiveRooms = require('../../services/getActiveRooms');
//var users = new Set();

io.sockets.on('connection', function (socket) {
    console.info("CONNECTED",socket.id);

    socket.on("urlInserted", function (roomData) {
        (async ()=>{
            var roomResult = await addRoom(roomData);
            if(roomResult){
                io.sockets.emit("updateRooms", roomResult);
                socket.emit("addActiveRoom", roomResult);
                socket.join(roomData.url);
            }
        })();
    });


    socket.once('disconnect', function () {
        (async ()=>{
            await leaveRoom(socket.id);
            var result = await getActiveRooms();
            io.sockets.emit("refreshUrlList", result);
        })();

        socket.disconnect();
    });


    socket.on("joinRoom", function (data) {
        (async()=>{
            var result = await joinRoom(data);
            if(result) io.sockets.emit("refreshRoomsOnJoin", result);
        })();
        socket.join(data.room.roomID);
    });


    socket.on("leaveRoom", function (data) {
        socket.leave(data.room.roomID);
        (async ()=>{
            await leaveRoom(data);
            var result = await getActiveRooms();
            io.sockets.emit("refreshUrlList", result);
        })();
    });


    socket.on("sendMessage", function (data) {
        (async()=>{
            var result = await saveMessage(data);
            io.sockets.in(data.room.roomID).emit("getMessage", result);
        })();

    });

});


module.exports = io;