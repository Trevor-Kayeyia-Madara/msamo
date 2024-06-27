const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
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
app.post('/signup', async (req, res) => {
  const { fullName, companyName, email, phoneNumber, password } = req.body;
  
  // Hash password before saving to database
  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(`INSERT INTO users (fullName, companyName, email, phoneNumber, password) VALUES (?, ?, ?, ?, ?)`, 
    [fullName, companyName, email, phoneNumber, hashedPassword], 
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'User registered successfully', userId: this.lastID });
  });
});

app.post('/login', (req, res) => {
  const { phoneNumber, password } = req.body;

  db.get('SELECT * FROM users WHERE phoneNumber = ?', [phoneNumber], async (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    res.json({ message: 'Login successful', user });
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
