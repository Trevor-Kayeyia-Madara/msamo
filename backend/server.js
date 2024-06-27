const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const nodemailer = require('nodemailer');
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// SQLite3 database setup
const db = new sqlite3.Database(':memory:'); // In-memory database, change to file-based if needed

db.serialize(() => {
  db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT,
    companyName TEXT,
    email TEXT,
    phoneNumber TEXT,
    password TEXT
  )`);
});

// Email verification setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Routes
app.post('/signup', (req, res) => {
  const { fullName, companyName, email, phoneNumber, password } = req.body;

  db.run(`INSERT INTO users (fullName, companyName, email, phoneNumber, password) VALUES (?, ?, ?, ?, ?)`, 
    [fullName, companyName, email, phoneNumber, password], 
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'User registered successfully', userId: this.lastID });
  });
});

app.post('/verify-email', (req, res) => {
  const { email } = req.body;
  const verificationCode = Math.floor(100000 + Math.random() * 900000);

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Email Verification Code',
    text: `Your verification code is ${verificationCode}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({ message: 'Verification code sent', verificationCode });
  });
});

// app.post('/verify-phone', (req, res) => {
//   const { phoneNumber } = req.body;
//   const verificationCode = Math.floor(100000 + Math.random() * 900000);

//   // Implement phone verification (e.g., using Twilio)
//   // For demonstration, we'll assume it was successful
//   res.json({ message: 'Verification code sent', verificationCode });
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
