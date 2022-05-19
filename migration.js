const mysql = require('mysql');
const migration = require('mysql-migrations');

const conn = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    'password': '',
    database: 'dvote_app'
});

migration.init(conn, __dirname + '/migration', () => {
    console.log('migrate successfully!');
});