var express = require('express');
var router = express.Router();
var nombres =['Obed','Jonathan','Ulises','Alejandro','Antonio','Noe','Liz','Marc','Kevyn','Andrew'];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId:'home'});
});

//Método POST
router.post('/', function(req, res){
  res.send('Hola Marco, Tengo una peticion con POST');
});
//Método PUT
router.put('/greeting', function(req,res) {
  res.send('Hola Marco, Te doy un saludo con Greeting');
});

//Método DELETE
router.delete('/hello', function(req,res){
  res.send('Hola Marco, Te doy un saludo con DELETE');
});
module.exports = router;
