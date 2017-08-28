var server = require('../../bin/www');
var io = require('socket.io').listen(server);
var user = require('../../models/user');

var users = new Set();

io.sockets.on('connection', function (socket) {
    console.info("CONNECTED",socket.id);
    io.sockets.to(socket.id).emit("updateSocketID", socket.id);

    socket.on('updateID', function (loggedUser) {
        user.update({_id: loggedUser._id},{socketID: socket.id}, function (err) {
            if (err) return handleError(err);
            loggedUser.socketID = socket.id;
            var userObj = {
                _id: loggedUser._id,
                username: loggedUser.username,
                email: loggedUser.email,
                socketID: loggedUser.socketID
            };

            io.sockets.emit("profileUpdated", userObj);
        });
    });


    socket.once('disconnect', function () {
        users.delete(socket.id);
        io.sockets.emit("updateList", Array.from(users));
        socket.disconnect();
    });


    socket.on("transferStatus", function (data) {
        socket.to(data.to).emit("messageStatus", data.status);
    });
    
    socket.on("notifyTyping", function (data) {
        socket.to(data.to).emit("isTyping",{
            value: data.value,
            typingUser: data.typingUser
        });
    });

    socket.on("sendMessage", function (data) {
        socket.emit("messageStatus", "Sent");
        socket.to(data.userID).emit("receiveMessage",{
            sender: data.sender,
            message: data.message
        });
    });


    socket.on("disconnect", function () {
        console.info(users);
        users.delete(socket.id);
        io.sockets.emit("updateList", Array.from(users));
        socket.disconnect();
    });

});


module.exports = io;