
const express = require('express');

const app  =  express();
var resultados = [{match:"Colo-Colo vs U. De Chile",Resultado:"3-0",id:"1"},
                {match:"Manchester City vs Liverpool",Resultado:"1-1",id: "2"}];


// retorna resultado especifico.
app.get('/resultados/:id', function (req, res) {
    var id = req.params.id;
    res.send(resultados[id-1]);
});
//retorna todos los resultados.
app.get('/resultados', function (req, res) {
    res.send(resultados);
  });
// agrega un resultado | escribir parametros en el siguiente orden: match, resultado e id.
app.put('/resultados',function (req,res ){
    
    let body = req.body; 
    resultados.push(body);
    res.send(body)
})

module.exports = app;