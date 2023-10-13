const express = require('express');
const app = express();
const port = 3000;

app.get('/api/users', (req, res) => {
  const response = require('./response.json');
  res.json(response);
});

module.exports = app;