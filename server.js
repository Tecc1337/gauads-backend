require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const PASSWORD_HASH = process.env.PASSWORD_HASH;

app.post('/login', async (req, res) => {
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ success: false, message: 'Password required' });
    }

    try {
        const isMatch = await bcrypt.compare(password, PASSWORD_HASH);

        if (isMatch) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        console.error("Fehler bei der Passwort-Überprüfung:", error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`✅ Sicherer Server ist bereit und läuft auf Port ${port}`);
});
