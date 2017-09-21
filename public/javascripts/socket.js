var server = require('../../bin/www');
var io = require('socket.io').listen(server);
var registration = require('../../services/registration');
var addRoom = require('../../services/addRoom');
var saveMessage = require('../../services/saveMessage');
var leaveRoom = require('../../services/leaveRoom');
var joinRoom = require('../../services/joinRoom');
var getActiveRooms = require('../../services/getActiveRooms');
var getFavicon = require('../../services/getFavicon');
var voting = require('../../services/voting');

io.sockets.on('connection', function (socket) {
    console.info("CONNECTED",socket.id);

    socket.on("urlInserted", function (roomData) {
        if(roomData.activeRoom){
            socket.leave(roomData.activeRoom.roomID);
            (async ()=>{
                await leaveRoom({
                    user: roomData.user,
                    room: roomData.activeRoom
                });
                var result = await getActiveRooms();
                if(result) io.sockets.emit("refreshUrlList", result);
            })();
        }

        (async ()=>{
            var image = await getFavicon(roomData.url);
            if(image) roomData.image = image;
            var roomResult = await addRoom(roomData);
            if(roomResult){
                io.sockets.emit("updateRooms", roomResult);
                socket.emit("addActiveRoom", roomResult);
                socket.join(roomResult.roomID);
            }
        })();
    });


    socket.once('disconnect', function () {
        (async ()=>{
            await leaveRoom(socket.id);
            var result = await getActiveRooms();
            if(result) io.sockets.emit("refreshUrlList", result);
        })();
        socket.disconnect();
    });

    socket.on("voting", function (data) {
        (async()=>{
            var result = await voting(data);
            if(result) io.sockets.in(data.roomID).emit("updateMessageVote", result);
        })();
    });

    socket.on("joinRoom", function (data) {
        (async()=>{
            var result = await joinRoom(data);
            if(result) {
                io.sockets.emit("refreshRoomsOnJoin", result);
                socket.join(data.room.roomID);
            }
        })();
    });


    socket.on("leaveRoom", function (data) {
        socket.leave(data.room.roomID);
        (async ()=>{
            try{
                await leaveRoom(data);
            }
            catch (err){
                console.info("ROOM LEAVE ERROR", err);
            }
            var result = await getActiveRooms();
            if(result) io.sockets.emit("refreshUrlList", result);
        })();
    });


    socket.on("sendMessage", function (data) {
        (async()=>{
            var result = await saveMessage(data);
            if(result) io.sockets.in(data.room.roomID).emit("getMessage", result);
        })();

    });



    // PRIVATE CHAT PART

    socket.on("joinPrivate", function (data) {
        console.info("Join private", data);
        /*
        (async()=>{
            var result = await joinRoom(data);
            if(result) {
                io.sockets.emit("refreshRoomsOnJoin", result);
                socket.join(data.room.roomID);
            }
        })();
        */
    });

});


module.exports = io;