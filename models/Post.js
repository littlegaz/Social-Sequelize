const { sequelize} = require("../db");
const { Sequelize } = require("sequelize");

let Post = sequelize.define('post', {
    title: Sequelize.STRING,
    body: Sequelize.STRING,
    createdAt: Sequelize.STRING 
});



module.exports = Post;