const { sequelize} = require("../db");
const { Sequelize } = require("sequelize");

let User = sequelize.define('user', {
    username: Sequelize.STRING,
    email: Sequelize.STRING 
});


module.exports = User;