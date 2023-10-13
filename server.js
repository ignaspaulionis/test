const express = require('express');
const app = express();
const port = 3000; // You can change this to your desired port number

// Middleware to parse JSON data
app.use(express.json());

// Define a route to serve the contents of response.json
app.get('/api/users', (req, res) => {
  // Read the JSON file and send it as a response
  const response = require('./response.json');
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
