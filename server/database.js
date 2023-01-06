require('dotenv').config();

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export const DB = new function() {
  this.result = null;
  this.self = connection;

  this.query = async (statement, options) => {
      var result = await connection.promise().query(statement, options, (err, res) => {
          if (err) {
              console.error("error: ", err);
              return err;
          }
          return res;
      });
      this.result = result;
      return result[0];
  };
}