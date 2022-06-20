const express = require('express');
require('dotenv').config();
const { getIdeas } = require('./models');

const server = express();
server.use(express.json());

server.get('/ideas', (req, res) => {
  console.log(req.body);
});

server.post('/ideas', (req, res) => {
  console.log(req.body);
});

server.put('/ideas', (req, res) => {
  console.log(req.body);
});

server.listen(process.env.port, () => {
  console.log(`listening on Port: ${process.env.port}`);
});
