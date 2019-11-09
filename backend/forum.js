var mysql = require('mysql');
var app  = require('express');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Iaminvisible211',
  database: 'forum_database'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = `CREATE TABLE users (first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  student_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  gender ENUM('male', 'female'),
  rating MEDIUMINT(200) NOT NULL,
  grade TINYINT(8) NOT NULL,
  is_admin ENUM('true', 'false') NOT NULL)`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("The customers table is created!!");
  });
});
