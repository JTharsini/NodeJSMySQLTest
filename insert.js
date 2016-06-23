var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'jeyaext',
	password: '1234',
	database: 'nodejstest'
});

connection.connect();

var article = {
	author: 'Jeya2',
	title: 'Miyaav2',
	body: 'Omg, Huh?'
};

var query = connection.query('insert into articles set ?', article, function(err,result)
{
	//console.log(query.sql);
	if(err)
	{
		console.error(err);
		return;
	}
	console.error(result);
	return;
});