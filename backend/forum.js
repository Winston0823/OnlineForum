var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Iaminvisible211',
  database: 'forum_database'
});

connection.connect(function(err) {
  if(err) throw err;
  console.log('All Good!');
});
