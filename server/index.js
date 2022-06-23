require('dotenv').config();
const express = require('express');
const path = require('path');
const { getIdeas, postIdea } = require('./models');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/ideas', (req, res) => {
  getIdeas().then((data) => {
    res.send(data.rows);
  }).catch((data) => {
    console.log('ERROR w/ get query', data);
    res.send(data);
  });
});

app.post('/ideas', (req, res) => {
  console.log(req.body);
  postIdea(req.body).then((data) => {
    console.log(req.body);
    res.send(data);
  }).catch((data) => {
    res.send(data);
  });
});

app.put('/ideas', (req, res) => {
  console.log(req.body);
});

app.listen(4000, () => {
  console.log(`listening on Port: ${4000}`);
});
