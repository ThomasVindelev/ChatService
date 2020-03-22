const socket = io("http://localhost:3000");

socket.on('kage', (data) => {
    console.log(data);
});