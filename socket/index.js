const io = require("socket.io")(5000,{
    cors: {
        origin: "http://localhost:3000",
      },
    });
    console.log("running")
    
    let users = [];
    
    const addUser = (userId, socketId) => {
      !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
    };
    
    const getUser = (userId) => {
      return users.find((user) => user.userId === userId);
    };
    
    
    io.on("connection", (socket) => {
      console.log("connected");
    
      //take userId and socketId from user
      socket.on("addUser", (userId) => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
      });
    
      //send and get message
      socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);
        io.to(user.socketId).emit("getMessage", {
          senderId,
          text,
        });
      });
    

      socket.on("disconnect", () => {
        console.log("a user disconnected!");
        io.emit("getUsers", users);
      });
    });