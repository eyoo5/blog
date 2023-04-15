const { Sequelize } = require("sequelize");
const dbURL = process.env.DATABASE_URL || `postgres://localhost:5432/blog`;

let config;

if (process.env.DATABASE_URL) {
  config = {
    host: "postgres",
    logging: false,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  };
} else {
  config = {
    logging: false,
  };
}

const db = new Sequelize(dbURL, config);

module.exports = db;
