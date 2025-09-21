
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000; // 
app.use(express.json());
app.use(cors());
const DAS_KORREKTE_PASSWORT = 'NiceTry';
app.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === DAS_KORREKTE_PASSWORT) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});
app.listen(port, () => {
    console.log(`✅ Server ist bereit und läuft auf Port ${port}`);
});
