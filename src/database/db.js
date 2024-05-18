const knex = require('knex');
const config = require('./knexfile');
const db = knex(config);
module_exports = db;