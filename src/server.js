'use strict';

const express = require('express');
const app = express();
const signup = require('./routes/signup');
const err404 = require('./error-handler/404.js');
const err500 = require("./error-handler/500");
const signin = require('./routes/signin')
const user = require('./routes/bearer.js');
const v1 = require('./routes/v1');
const v2 = require('./routes/v2');
app.use(express.json());

app.use(signup);
app.use(signin);
app.use(user);
app.use('/api/v1',v1);
app.use('/api/v2',v2);
app.get('/',(req,res)=>{
    res.send('home route');
})



app.use(err500);
app.use('*',err404);


function start(PORT){
    app.listen( PORT,()=>{
console.log(`listen to port ${PORT}`);
    })
}


module.exports = {
    app : app ,
    start : start
    }



