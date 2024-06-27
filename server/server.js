// server-backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000; // Choose your desired port

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

// SignUp Route
app.post('/signup', (req, res) => {
  const { fullName, companyName, email, phoneNumber, password } = req.body;

  // Example data structure
  const newUser = {
    fullName,
    companyName,
    email,
    phoneNumber,
    password,
  };

  // Read current data from data.json
  const dataFilePath = path.join(__dirname, 'assets', 'data.json');
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).json({ error: 'Error reading data file' });
      return;
    }

    let users = [];
    if (data) {
      users = JSON.parse(data);
    }

    // Add new user to existing data
    users.push(newUser);

    // Write updated data back to data.json
    fs.writeFile(dataFilePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
        res.status(500).json({ error: 'Error writing data file' });
        return;
      }
      console.log('Data written to file successfully');
      res.json({ success: true });
    });
  });
});

// Login Route
app.post('/login', (req, res) => {
  const { phoneNumber, password } = req.body;

  // Read current data from data.json
  const dataFilePath = path.join(__dirname, 'assets', 'data.json');
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).json({ error: 'Error reading data file' });
      return;
    }

    const users = JSON.parse(data);
    const user = users.find(user => user.phoneNumber === phoneNumber && user.password === password);

    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    res.json({ success: true, user });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
