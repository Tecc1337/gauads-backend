// server.js

// Importiere die notwendigen Bibliotheken
const express = require('express');
const cors = require('cors');

// Erstelle die Server-Anwendung
const app = express();
const port = 3000; // Der "Türnummer", auf die unser Server hören wird

// --- KONFIGURATION ---
// Erlaube dem Server, JSON-Daten zu verstehen
app.use(express.json());
// Erlaube unserer Webseite (Frontend), mit diesem Server zu sprechen
app.use(cors());

// --- DAS GEHEIME PASSWORT ---
// Dieses wird sicher auf dem Server aufbewahrt und niemals an den Benutzer gesendet.
const DAS_KORREKTE_PASSWORT = 'NiceTry';

// --- DIE LOGIN-LOGIK ---
// Erstelle einen "Endpunkt", also eine URL, an die das Frontend das Passwort senden kann.
app.post('/login', (req, res) => {
    // Hole das vom Benutzer gesendete Passwort aus dem "Request Body".
    const { password } = req.body;

    // Prüfe, ob das gesendete Passwort mit unserem geheimen Passwort übereinstimmt.
    if (password === DAS_KORREKTE_PASSWORT) {
        // Wenn es übereinstimmt, sende eine Erfolgsmeldung zurück.
        res.json({ success: true });
    } else {
        // Wenn es nicht übereinstimmt, sende eine Fehlermeldung zurück.
        res.json({ success: false });
    }
});

// --- STARTE DEN SERVER ---
// Sage unserem Server, dass er auf Anfragen am festgelegten Port lauschen soll.
app.listen(port, () => {
    console.log(`✅ Server ist bereit und läuft auf Port ${port}`);
});