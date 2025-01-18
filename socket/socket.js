import {Server} from 'socket.io';
import express from 'express';
import http from 'http';

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin:'http://localhost:5173',
        methods:['GET','POST']
    }
})

const userSocketMap = {}

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId;
    if(userId){
        userSocketMap[userId] = socket.id;
        // console.log(`User connected: UserId = ${userId}, \nSocketId = ${socket.id}`);
    }

    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        if(userId){
            delete userSocketMap[userId];
            // console.log(`User disconnected: UserId = ${userId}`);
        }
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    })
})

export {app, server , io};