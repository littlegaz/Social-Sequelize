const { sequelize} = require("../db");
const { Sequelize } = require("sequelize");

let Profile = sequelize.define('profile', {
    bio: Sequelize.STRING,
    profilePicture: Sequelize.STRING,
    birthday: Sequelize.STRING  
});


module.exports = Profile;