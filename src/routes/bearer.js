'use strict';

const express = require ('express');
const routers = express.Router();
const err500 = require('../error-handler/500');
const bearer = require('../middlewares/bearerToken');
// const bearer = require('.')
routers.get('/user',bearer,(req,res) =>{
  res.status(200).json({


    'message': 'Correct Login',
    'user': req.user

})
});







module.exports = routers;