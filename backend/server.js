const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const { runDatabaseFunctions }  = require('./insertDatabase');
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let signUpData;

app.post('/', (req, res) => {
  // Server reagiert auf die POST-Anfrage und gibt eine JSON-Antwort zurück
  const data = req.body;
  
  console.log(data);
  
  const response = { message: 'Erfolgreiche POST-Anfrage', data: data };
  res.json(response);

  signUpData = data;

  runDatabaseFunctions(signUpData); 
}); 

app.listen(port, () => {
  console.log('The server run on port ' + port);
});


