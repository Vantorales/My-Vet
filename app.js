require('dotenv').config();
const Server = require('./backend/models/server');


const server = new Server();



server.listen();