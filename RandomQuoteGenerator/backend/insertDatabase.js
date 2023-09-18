const dbPool = require('./databaseConnection.js');

const databaseFunctions = {

  insertData: async function(data) {
    return new Promise((resolve, reject) => {
      dbPool.getConnection((err, connection) => {
        if (err) {
          reject('Fehler beim Abrufen einer Verbindung aus dem Pool: ' + err.stack);
        } else {
          connection.query('INSERT INTO benutzernamen SET ?', data, (err, results) => {
            if (err) {
              reject('Fehler beim Einfügen der Daten: ' + err.stack);
            } else {
              console.log('Daten erfolgreich eingefügt. ID: ' + results.insertId);
              // Die Verbindung wird wieder in den Pool zurückgegeben
              connection.release();
              resolve();
            }
          });
        }
      });
    });
  },
}

async function runDatabaseFunctions(data) {
  try {
    await databaseFunctions.insertData(data);
    console.log('Datenbankoperationen abgeschlossen.');
  } catch (error) {
    console.error('Fehler beim Ausführen der Datenbankfunktionen: ' + error);
  }
}

module.exports = {
  runDatabaseFunctions
};
