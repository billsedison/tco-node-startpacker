const { Schema } = require('mongoose')
const uuid = require('uuid/v4')
const _ = require('lodash')

const schema = new Schema({
  id: { type: String, hashKey: true, index: { global: true }, required: true, default: uuid },
  username: { type: String, required: true, index: { global: true } },
})

schema.index({id: 1}, {unique: true})

module.exports = schema
