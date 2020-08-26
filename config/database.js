const db = require ('../bin/db.js');
const database = new db('127.0.0.1', 'barry', 'webdev', 'news');

module.exports.default = database;