'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');


//conexion a db
mongoose.connect('mongodb://localhost:27017/cmean2', (err,res)=>{
  if (err) console.log(`Error al conectar con la base de datos: ${err}`);

  console.log('Conexión a la base de datos establecida correctamente...');

  app.listen(config.port, ()=>{
    console.log(`servidor de api rest de app musica escuchando en el puerto : ${config.port}`);
  });
});

