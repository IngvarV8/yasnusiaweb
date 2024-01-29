const socket = new WebSocket("ws://localhost:8080");

socket.onopen = function (event) {
    console.log("Connection opened:", event);
    socket.send("Hello, server!");
};

socket.onmessage = function (event) {
    console.log("Received message from server:", event.data);
    updateTable(event.data);
};

socket.onclose = function (event) {
    console.log("Connection closed:", event);
};

socket.onerror = function (event) {
    console.error("WebSocket error:", event);
};