const mysql = require('mysql2');

const opts = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "examly",
  database: "cbh",
};

const promPool = mysql.createPool(opts);

const pool = promPool.promise();

module.exports = pool
