// Import Express
const express = require('express');

// Create Express app
const app = express();


// GET rute
app.get('/', (req, res) => {
res.send('Welcome to the mainpage!')
});

app.get('/home', (req, res) => {
  res.send('<h1>Home page!</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About page!</h1>');
});

app.get('/greetings/:vukale', (req, res) => {
  const username = req.params.vukale; 
  res.send(`Hello there, ${username}! What a delight it is to see you once more.`);
});


// Start server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
