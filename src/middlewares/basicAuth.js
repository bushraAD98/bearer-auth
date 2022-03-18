'use strict';

const {Users} = require('../models/index.js');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const API_SECRET = process.env.API_SECRET || 'the secret';
 async function basic(req, res, next) {

    const encodedHeaders = req.headers.authorization.split(' ')[1]; // "Basic dGFtaW06cGl6emE="
    console.log('encodedHeaders',encodedHeaders);
    const [userName, passWord] = base64.decode(encodedHeaders).split(':'); // spread operator
    
    const user = await Users.findOne({ where: { userName } });
    const valid = await bcrypt.compare(passWord, user.passWord);
    if (valid) {
        let newToken = jwt.sign({ userName: user.userName }, API_SECRET,{expiresIn:900000});

        user.token = newToken;
        res.status(200).json(user)
    } else {
        next('Invalid User');
    }

}

module.exports = basic;