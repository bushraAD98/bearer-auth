'use strict';



// const { sequelize, DataTypes } = require('../models/index.js');



const Users = (sequelize,DataTypes) => sequelize.define('users', {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    passWord: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  
    token: {
        type: DataTypes.VIRTUAL
    },
    role: {

type:DataTypes.ENUM('admin','editor','writer','user'),
defaultValue: 'user'
    },
    actions : {
      type: DataTypes.VIRTUAL,
      get() {

        const acl = {
          user : ['read'],
          writer : ['read','create'],
          editor : ['read','update','create'],
          admin : ['read','update','create','delete']

        }
        return acl[this.role]
      }
    }
  
    
});


module.exports = Users;