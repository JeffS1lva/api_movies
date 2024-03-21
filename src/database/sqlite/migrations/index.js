const sqlConnection = require('../../sqlite')
const createUsers = require('./createUsers')

async function migrationsRun() {
   const schema = [
    createUsers
   ].join(',')

   sqlConnection()
   .then(db => db.exec(schema))
   .catch(error => console.error(error))
}

module.exports = migrationsRun