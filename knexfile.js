const { conn } = require('./.env')

module.exports = {
    development: {
        client: 'postgresql',
        connection: conn,
        pool: { min: 2, max: 10 },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
    production: {
        client: 'postgresql',
        connection: conn,
        pool: { min: 2, max: 10 },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
}