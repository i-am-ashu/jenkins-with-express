const mysql = require("mysql");

function connect()
{
    var connection = mysql.createConnection(
        {
            host : "localhost",
            database : "db_work",
            user : "Dac",
            password : 'dac'
        }
    )
    connection.connect();
    return connection;
};

module.exports = 
{
    connect : connect
}
