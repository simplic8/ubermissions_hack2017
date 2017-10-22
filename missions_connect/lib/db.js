'use strict';

let mysql = require('mysql');

let db_params = {
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'missions_connector',
    charset: 'utf8mb4'
};

module.exports = mysql.createPool(db_params);