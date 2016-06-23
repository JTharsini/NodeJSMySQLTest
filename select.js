var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'cambio123',
	database: 'jeyatest'
});

connection.connect();

connection.query('select * from articles', function(err,result){
	console.log(result);
});