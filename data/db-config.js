const knex = require('knex');

const config = require('../knexfile.js');

module.exports = knex(config.development);


// rewatch video (towards the end) for postgress and env setup