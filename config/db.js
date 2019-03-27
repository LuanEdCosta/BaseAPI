const config = require('../knexfile.js').development //when put this in production you need to change to production
const knex = require('knex')(config)

knex.migrate.latest([ config ]) //Evolve database in code is not the best action

module.exports = knex