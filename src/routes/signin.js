'use strict';
const express = require ('express');
const routers = express.Router();
const err500 = require('../error-handler/500');
// const bcrypt = require('bcrypt');
// const base64 = require('base-64');
const basic= require('../middlewares/basicAuth');
const {Uaers} = require('../models/index.js');


routers.post('/signin',basic,()=>{

  
});






  

routers.use(err500);
module.exports = routers