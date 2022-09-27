const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "examly",
  database: "cbh",
})

module.exports = connection;