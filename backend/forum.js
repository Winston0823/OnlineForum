var mysql = require('mysql');
var app  = require('express');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Iaminvisible211',
  database: 'forum_database'
});
//seriously, that's all you've done...it's fine, more than I've done...where? then///atom is an editor that opens up any type of file. Could we have some faster responses? Like if you're going to open a text file at least open it faster...
//no, ive created all the tables and columns and relationships and stuff for our database, oh ok yes ur right ill open up the txt files
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
