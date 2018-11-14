const TestService = require('../services/TestService')

async function test (req) {
  return TestService.test(req.query)
}

module.exports = {
  test,
}
