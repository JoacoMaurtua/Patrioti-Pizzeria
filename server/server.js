const express = require('express');
const cors = require('cors'); //SUPER IMPORTANTE

const app = express();

const PORT = 8000;

//conexion con la base de datos:
const connectDB = require('./config/mongodb.config');
connectDB();


//midlewares:

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//para poder usar 2 servers en paralelo
app.use(cors({credentials:true, origin: 'http://localhost:3000'}))


//Rutas:
app.use('/api',require('./routes/user.routes'));


app.listen(PORT,()=>{
  console.log(`1: Server running on port: ${PORT}`)
})