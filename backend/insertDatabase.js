const http = require('http');
const mysql = require('mysql');
const server = http.createServer(function(req, res) {
	// Endpunkt-Handling
  if (req.method === 'POST' && req.url === '/register') {
      handleRegister(req, res);
  } else {
      // Endpunkt nicht gefunden
      res.statusCode = 404;
      res.end();
  }
}); 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'niklas',
  password: '123',
  database: 'quotegenerator'
}); 
 
const databaseFunctions = {
  connectToDatabase() {
    // Verbindung zur Datenbank herstellen
    connection.connect(function(err) {
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
    connection.query('INSERT INTO benutzernamen SET ?', data, function(err, results) {
        if (err) {
            console.error('Fehler beim Einfügen der Daten: ' + err.stack);
            return;
        }
        console.log('Daten erfolgreich eingefügt. ID: ' + results.insertId);
      });
  },
  disconnectFromDatabase() {
    // Verbindung zur Datenbank schließen
    connection.end(function(err) {
        if (err) {
            console.error('Fehler beim Schließen der Verbindung zur Datenbank: ' + err.stack);
            return;
        }
        console.log('Verbindung zur Datenbank geschlossen.');
    });
  }
}




