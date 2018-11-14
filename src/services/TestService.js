const Joi = require('joi')
const createError = require('http-errors')
const helper = require('../common/helper')
const { Model } = require('../models')

async function test (testReq) {
  await helper.ensureNotExist(Model, { name: testReq.testReq })

  // return NormalizedSkillName.create(normalizedSkillName)
  return 'Hello world'
}

// test.schema = {
//   xxx: Joi.object().keys({
//     testReq: Joi.string().required(),
//     regex: Joi.string().required()
//   })
// }

// async function remove (name) {
//   await helper.findOneAndRemove(Model, { name })
// }

// remove.schema = {
//   name: Joi.string().required()
// }

module.exports = {
  test,
}

helper.buildService(module.exports)
