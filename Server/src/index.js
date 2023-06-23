const express = require('express');
const morgan = require('morgan')
const server = express();
const PORT = 3001;
const cors = require('cors')
const router = require('./routes/index')


server.use(morgan('dev'));
server.use(cors());

server.use(express.json());

server.use('/rickandmorty', router)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});