const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const Post = db.define("Post", {
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.TEXT,
  },
});

module.exports = Post;
