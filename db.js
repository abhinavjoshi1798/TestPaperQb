// const mysql = require("mysql");
// require("dotenv").config();

// const connection = mysql.createConnection({
//   host: "testing-qb-11jan2024.cnmuhqh4flax.ap-south-1.rds.amazonaws.com",
//   user: "root" ,
//   password: "allen#sql$2021",
//   database: "question_pool",
// });

// connection.connect(function (err) {
//   if (err) {
//     console.error("Error connecting to MySQL database: " + err.stack);
//     return;
//   }

//   console.log("Connected to MySQL database!");
// });

// module.exports = connection;


const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting to MySQL database: " + err.stack);
    return;
  }

  console.log("Connected to MySQL database!");
});

module.exports = connection;
