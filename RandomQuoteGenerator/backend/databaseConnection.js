const mysql = require('mysql');

const dbPool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'niklas',
  password: '123',
  database: 'quotegenerator'
})



// const dbConnection = mysql.createConnection({
//   host: 'localhost',
//   user: 'niklas',
//   password: '123',
//   database: 'quotegenerator'
// }); 
 

module.exports = dbPool;