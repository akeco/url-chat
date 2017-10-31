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
var getOrCreatePrivateRoom = require('../../services/getOrCreatePrivateRoom');
var savePrivateMessage = require('../../services/savePrivateMessage');
var findSingleUserSocketID = require('../../services/findSingleUserSocketID');
var http = require('http');
var url = require('url');

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

        var handleSuccess = async ()=>{
            var image = await getFavicon(roomData.url);
            if(image) roomData.image = image;
            var roomResult = await addRoom(roomData);
            if(roomResult){
                io.sockets.emit("updateRooms", roomResult);
                socket.emit("addActiveRoom", roomResult);
                socket.join(roomResult.roomID);
            }
        };

        if(roomData.url.indexOf("http") == -1) roomData.url = "http://"+roomData.url;

        var options = {
            method: 'HEAD',
            host: url.parse(roomData.url).host,
            port: 80,
            path: url.parse(roomData.url).pathname
        };
        var req = http.request(options, function (r) {
            handleSuccess(roomData);
        }).on('error', (err)=>{
            console.info("Invalid URL");
            socket.emit("addActiveRoom", false);
        });
        req.end();
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

    socket.on("receiveRooms", function () {
        (async ()=>{
            var result = await getActiveRooms();
            if(result) socket.emit("receiveRooms", result);
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
            if(result){
                io.sockets.in(data.room.roomID).emit("getMessage", result);
            }
        })();

    });


    // PRIVATE CHAT PART

    socket.on("joinPrivate", function (data) {
        (async()=>{
            var result = await getOrCreatePrivateRoom(data);
            if(result) {
                socket.join(result.room.privateRoomID);
                socket.emit("joinPrivateRoom", result);
            }
        })();
    });

    socket.on("sendPrivateMessage", function (data) {
        (async ()=>{
            var result = await savePrivateMessage(data);
            if(result){
                if(data.receiverID){
                    (async()=>{
                        var resultSocketID = await findSingleUserSocketID(data.receiverID);
                        if(resultSocketID) socket.broadcast.to(resultSocketID).emit("notifyMessage", data.sender);
                    })();
                }
                io.sockets.in(result.privateRoomID).emit("handlePrivateMessage", result);
            }
        })();
    });
});


module.exports = io;