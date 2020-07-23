
require('./config/config');

const express = require('express');
const app = express();

const bodyParser= require('body-parser');
const port = process.env.PORT || 3000;
// para parsear parametros a json.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Middleware de resultados
app.use( require('./routes/resultados'));

// Inicializacion.
app.listen(process.env.PORT, () => {
    console.log('escuchando puerto :',process.env.PORT)
})


