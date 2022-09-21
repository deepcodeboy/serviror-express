//LIBRERIAS
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

//IMPORTACIONES
const userRoutes = require('./routes/user.routes')

//APLICACION
const app = express();
const port = process.env.PORT || 3000

//MIDDLEWARES
app.use(express.json());
app.use('/api', userRoutes);


//CONECCION CON MONGO
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Conectado a la base de datos mongo'))
.catch((error) => console.error(error));

//CONECCION DEL PUERTO
app.listen(port, () => console.log("Server en el puerto", port));