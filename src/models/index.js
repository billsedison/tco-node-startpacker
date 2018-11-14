/**
 * Initializ all model schemas.
 */
const _ = require('lodash')
const config = require('config')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

mongoose.Promise = global.Promise
const connection = mongoose.createConnection(config.MONGODB_URL, { useNewUrlParser: true, useCreateIndex: true })
const schemas = requireDir()

_.forEach(_.values(schemas), (schema) => {
  // Static function to find all documents
  schema.statics.findAll = async (filter) => {
    let results = await this.scan(filter).exec()
    while (results.lastKey) {
      results = await this.scan(filter).startKey(results.startKey).exec()
    }
    return results
  }
})

const models = {
  Model: connection.model('Model', schemas.Model)
  // Account: connection.model('Account', schemas.Account),
}

module.exports = models
