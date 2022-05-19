const mysql = require('mysql');

const conn = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    'password': '',
    database: 'dvote_app'
});

module.exports = conn;