const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("read-file", (data) => {
   console.log(data);
});

emitter.emit("read-file", (data) => {
   console.log(data);
});

emitter.once("read-file", (data) => {
   console.log(data);
});

// emitter.emit("data", "sending data");

module.exports = emitter;
