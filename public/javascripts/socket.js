var server = require('../../bin/www'),
    io = require('socket.io').listen(server),
    registration = require('../../services/registration'),
    addRoom = require('../../services/addRoom'),
    saveMessage = require('../../services/saveMessage'),
    leaveRoom = require('../../services/leaveRoom'),
    joinRoom = require('../../services/joinRoom'),
    getActiveRooms = require('../../services/getActiveRooms'),
    getFavicon = require('../../services/getFavicon'),
    voting = require('../../services/voting'),
    getOrCreatePrivateRoom = require('../../services/getOrCreatePrivateRoom'),
    savePrivateMessage = require('../../services/savePrivateMessage'),
    findSingleUserSocketID = require('../../services/findSingleUserSocketID'),
    getMessages = require('../../services/getMessages'),
    getPrivateMessages = require('../../services/getPrivateMessages'),
    getRoomMessagesNumber = require('../../services/getRoomMessagesNumber'),
    http = require('http'),
    url = require('url');

io.sockets.on('connection', function (socket) {

    console.info("CONNECTED",socket.id);

    socket.once('disconnect', function () {
        (async ()=>{
            await leaveRoom(socket.id);
            var result = await getActiveRooms();
            if(result) io.sockets.emit("refreshUrlList", result);
        })();
        socket.disconnect();
    });


    socket.on("urlInserted", function (roomData) {
        console.info("INSERT URL");
        if(roomData.activeRoom){
            socket.leave(roomData.activeRoom.roomID);
            (async ()=>{
                await leaveRoom({
                    user: roomData.user,
                    room: roomData.activeRoom
                });
                var result = await getActiveRooms();
                if(result) {
                    io.sockets.emit("refreshUrlList", result);
                }
            })();
        }

        var handleSuccess = async ()=>{
            var image = await getFavicon(roomData.url);
            if(image) roomData.image = image;
            var roomResult = await addRoom(roomData);
            if(roomResult){
                io.sockets.emit("updateRooms", roomResult);
                socket.emit("resetMessageSettings");
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


    socket.on("prependMessagesRequest", function (data) {
      (async ()=>{
        var result = await getMessages(data.roomID, data.messagesPart);
        if(result) socket.emit("prependMessagesResponse", result);
      })();
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
                io.sockets.emit("refreshRoomsOnJoin", {notifyID: data.user._id, result});
                socket.emit("resetMessageSettings");
                socket.join(data.room.roomID);
            }
        })();
    });


    socket.on("getRooms", function () {
        (async ()=>{
            var result = await getActiveRooms();
            if(result) socket.emit("receiveRooms", result);
        })();
    });


    socket.on("getSpecificPublicRoomMessages", function(roomID){
        (async ()=>{
            var result = await getMessages(roomID),
                messagesNumber = await getRoomMessagesNumber({ roomID }, 'public'),
                data = {};
                if(messagesNumber) data.messagesNumber = messagesNumber;
            if(result) {
                data.result = result;
                socket.emit("receiveSpecificPublicRoomMessages", data);
            }
        })();
    });


    /*
    * Make response when url is inserted and tries to fetch messages history
    * */
    socket.on("getInsertedRoomMessages", function(roomID){
        (async ()=>{
            var result = await getMessages(roomID);
            if(result) socket.emit("receiveInsertedRoomMessages", result);
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
            if(result) {
                io.sockets.emit("refreshUrlList", result);
                socket.emit("resetMessageSettings");
            }
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
        const {sender, receiver} = data;
        (async()=>{
            var result = await getOrCreatePrivateRoom(data),
                messagesNumber = await getRoomMessagesNumber({sender, receiver}, 'private'),
                responseData = {};
            if(messagesNumber) responseData.messagesNumber = messagesNumber;
            if(result) {
                responseData.result = result;
                socket.join(result.room.privateRoomID);
                socket.emit("resetPrivateMessageSettings");
                socket.emit("joinPrivateRoom", responseData);
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


    socket.on("prependPrivateMessagesRequest", function (data) {
        if(data.roomID && data.messagesPart){
            (async()=>{
                var result = await getPrivateMessages(data.roomID, data.messagesPart);
                if(result) socket.emit("prependPrivateMessagesResponse", result);
            })();
        }
    });

});


module.exports = io;