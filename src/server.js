'use strict';

const express = require('express');
const app = express();
const signup = require('./routes/signup');
const err404 = require('./error-handler/404.js');

const signin = require('./routes/signin')



app.use(express.json());

app.use(signup);
app.use(signin);


app.get('/',(req,res)=>{
    res.send('home route');
})

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



