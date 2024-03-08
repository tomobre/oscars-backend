const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
});

db.connect((err) => {
  if (err) {
    console.error("error connecting to mysql db:", err);
  } else {
    console.log("connected to db");
  }
});

module.exports = db;
