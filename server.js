const express = require('express');
const app = express();
const port = 3000;

// 1. GET route for root path
app.get('/', (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

// 2. GET route for /hobbies path
app.get('/hobbies', (req, res) => {
  res.send('I cycle, go boating, and play guitar.');
});

// 3. GET route for /skills path
app.get('/skills', (req, res) => {
  res.send('JavaScript, Node.js, and Express.js!');
});

// 4. GET route for /api/profile path (JSON response)
app.get('/api/profile', (req, res) => {
  res.json({
    name: "Camper Bot",
    hobbies: ['cycling', 'boating', 'guitar'],
    skills: ['JavaScript', 'Node.js', 'Express.js']
  });
});

// 5. Start server listening on port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});