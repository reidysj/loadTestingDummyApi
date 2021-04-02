const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());

server.get('/linkFragment', (req, res) => {
    res.status(200).json({message: 'Success'});
})

server.post('/postLinkFragment', (req, res) => {
    res.status(201).json(req.body);
})

server.get('/', (req, res) => {
    res.send('Womp Womp Womp')
})

module.exports = server;