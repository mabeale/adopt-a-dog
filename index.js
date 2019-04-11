const express = require('express');
const server = express();

server.use(express.json());

//Define our port variable
const port = process.env.PORT || 5000;
//Instruct our server to listen for connections on that port
server.listen(port, ()=> console.log('Running on port ${port}'));
