'use strict';

// const models = require(".");

// const { Sequelize, DataTypes } = require("sequelize/types");

const Music = (sequelize,DataTypes) =>sequelize.define('music',{

name : {type:DataTypes.STRING
},
duration :{type : DataTypes.INTEGER}

})

module.exports = Music;