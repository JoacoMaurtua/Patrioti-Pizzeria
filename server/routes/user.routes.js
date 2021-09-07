const express = require('express');
const router = express();
const {index} = require('../controllers/user.controllers')

router.get('/message',index);

module.exports = router