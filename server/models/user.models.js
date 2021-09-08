const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
}, {timestamps:true});

const User = mongoose.model('Users',UserSchema);

module.exports = User;