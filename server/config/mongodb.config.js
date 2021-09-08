const mongoose = require('mongoose');

const dataBase = 'mongodb://localhost/pizzeriaDB';

const connectDB = async() =>{
  try{
    await mongoose.connect(dataBase, {
      useNewUrlParser: true,
      useUnifiedTopology:true
    });

    console.log(`2: Established connection with data base`);

  }catch(err){
    console.error(err);
    process.exit(1) // error opcional
  }
}

module.exports = connectDB;