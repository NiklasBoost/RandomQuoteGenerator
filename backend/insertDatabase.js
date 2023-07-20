const http = require('http');
const db = require('./databaseConnection.js');


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

