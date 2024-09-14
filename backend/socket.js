const socketIo = require("socket.io");
const {
  addUser,
  handleNext,
  handleDisconnect,
  getTargetSocketId,
  updateUserFiltersInService,
  handleCallAccepted,
  handleCallEnd,
  handleStop,
} = require("./services/matchingService");
const { isConnectedBefore } = require("./config/db");
const socketSetup = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    socket.on("add-user", (userInfo) => {
      if (!isConnectedBefore) {
        console.error("MongoDB is not connected");
        socket.emit("error", "Database connection error");
        return;
      }
      socket.user = userInfo; // Store user info in socket for reference
      addUser(io, socket);
    });

    socket.on("next", () => {
      handleNext(io, socket);
    });

    socket.on("ice-candidate", (candidate) => {
      const targetSocketId = getTargetSocketId(socket.id);
      if (targetSocketId) {
        io.to(targetSocketId).emit("ice-candidate", candidate);
      }
    });

    socket.on("offer", (offer) => {
      const targetSocketId = getTargetSocketId(socket.id);
      if (targetSocketId) {
        io.to(targetSocketId).emit("offer", offer);
      }
    });
    socket.on("send-gift", async (data) => {
      io.to(data.receiverSocket).emit("gift-received", data);
    });
    socket.on("answer", (answer) => {
      const targetSocketId = getTargetSocketId(socket.id);
      if (targetSocketId) {
        io.to(targetSocketId).emit("answer", answer);
      }
    });

    socket.on("prepare-for-call", ({ callerSocketId, callerUserId }) => {
      //console.log("from prepare-for-call");
      socket.prepareForCall = true;
      socket.callerSocketId = callerSocketId;
      socket.callerUserId = callerUserId;
    });

    socket.on("call-ended", () => {
      handleCallEnd(io, socket);
    });
    socket.on("disconnect", (reason) => {
      handleDisconnect(io, socket);
      //console.log("Client disconnected", socket.id, "reason:", reason);
    });
    socket.on("stop", () => {
      handleStop(io, socket);
    });

    // Listen for filter updates
    socket.on("update-filters", ({ userId, filters }) => {
      updateUserFiltersInService(userId, filters);
    });
    socket.on("call-accepted", (data) => {
      handleCallAccepted(socket, data);
      console.log("From Call-Accepted");
    });

    socket.on("call-rejected", () => {
      if (socket.user.callerSocketId) {
        const callerSocket = users.find(
          (user) => user.id === socket.user.callerSocketId
        );
        if (callerSocket) {
          callerSocket.emit("call-rejected");
        }
      }
    });
  });
};

module.exports = socketSetup;
