const express = require('express');

const app = express();

const PORT = 8000;





app.use('/api',require('./routes/user.routes'));


app.listen(PORT,()=>{
  console.log(`1: Server running on port: ${PORT}`)
})