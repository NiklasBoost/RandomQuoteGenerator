const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'niklas',
  password: '123',
  database: 'quotegenerator'
}); 
 

module.exports = connection;