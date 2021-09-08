const User = require('../models/user.models');

const index = (req,res) =>{
  res.json({
    data:"Hello world"
  })
}

const createUser = (req,res) =>{
  User.create(req.body)
      .then(result => res.json({data:result}))
      .catch(err => res.json({error:err}))
}


module.exports = {index, createUser};