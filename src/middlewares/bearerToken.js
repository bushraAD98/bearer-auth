'use strict';

const {Users} = require('../models/index.js');
const jwt = require('jsonwebtoken');
const API_SECRET = process.env.API_SECRET || 'secret';
async function bearer(req, res, next) {

    console.log(req.headers.authorization);
    const bearerHeaderToken = req.headers.authorization.split(' '); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRhbWltIiwiaWF0IjoxNjM2MzY2MDgwfQ.OhHLD4yRWs1LlTloBjIs0j-QYzi8LdoQDXUfPaO0BSg
   let token = bearerHeaderToken.pop();
   
   if(token){
    const parsedToken = jwt.verify(token, API_SECRET);
    const user = await Users.findOne({ where: { userName: parsedToken.userName } });
   console.log('****',parsedToken.userName);
   
    if (user) {
        req.token = parsedToken;
        req.user = user;
//    console.log('req',user);
   next();
    } else {
        next('Invalid Token');

}}
}

module.exports = bearer;