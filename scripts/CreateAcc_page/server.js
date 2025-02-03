const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/save_data', (req, res) => {
    const { name, password } = req.body;

    // Server-side validation
    if (!name || !password || name.length < 5 || password.length < 5) {
        return res.status(400).json({ error: 'Invalid data' });
    }

    // Password Hashing
    const bcrypt = require('bcrypt'); 
    const hashedPassword = bcrypt.hashSync(password, 10);

    const db = require('./db');
    db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [name, hashedPassword], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json({ message: 'User registered successfully' });
    });
});