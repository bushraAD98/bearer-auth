"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const Users = require("./user");
// const users = require("./user");
require("dotenv").config();
const Collection = require('./collection.js');
const Music = require('./music');


const DATABASE_URL =
  process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;

let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

let musicModel = Music(sequelize,DataTypes)


module.exports = { db: sequelize, Users:Users(sequelize, DataTypes),
music : new Collection(musicModel) };
