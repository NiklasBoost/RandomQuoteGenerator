const http = require('http');
const db = require('./databaseConnection.js');

const server = http.createServer((req, res) => {
  // Endpunkt-Handling
  if (req.method === 'POST' && req.url === 'http://localhost:3000/register') {
    console.log('Verbindung geklappt');
  } else {
    // Endpunkt nicht gefunden
    console.log('schief gelaufen');
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server läuft auf Port 3000');
});

function handleRegister(res) {
  // Hier kannst du den Anforderungs- und Antwortcode für den '/register'-Endpunkt einfügen
  // Beispiel: Daten empfangen, in die Datenbank einfügen, usw.
  databaseFunctions.insertData(); // Beispiel für die Verwendung einer Funktion aus databaseFunctions
  res.statusCode = 200;
  res.end('Registrierung erfolgreich!');
}

const databaseFunctions = {
  connectToDatabase() {
    // Verbindung zur Datenbank herstellen
    db.connection.connect((err) => {
      if (err) {
        console.error('Fehler beim Herstellen der Verbindung zur Datenbank: ' + err.stack);
        return;
      }
      console.log('Verbindung zur Datenbank hergestellt.');
    });
  },
  insertData() {
    // Datenobjekt zum Einfügen
    const data = {
      Email: '',
      Benutzername: '',
      Password: ''
    };

    // Daten in die Datenbank einfügen
    db.connection.query('INSERT INTO benutzernamen SET ?', data, (err, results) => {
      if (err) {
        console.error('Fehler beim Einfügen der Daten: ' + err.stack);
        return;
      }
      console.log('Daten erfolgreich eingefügt. ID: ' + results.insertId);
    });
  },
  disconnectFromDatabase() {
    // Verbindung zur Datenbank schließen
    db.connection.end((err) => {
      if (err) {
        console.error('Fehler beim Schließen der Verbindung zur Datenbank: ' + err.stack);
        return;
      }
      console.log('Verbindung zur Datenbank geschlossen.');
    });
  }
};

// Server starten