const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'niklas',
  password: '123',
  database: 'quotegenerator'
}); 
 

module.exports = dbConnection;