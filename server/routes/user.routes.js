const express = require('express');
const router = express();
const {index, createUser} = require('../controllers/user.controllers')

router.get('/message',index);

router.post('/create',createUser);

module.exports = router