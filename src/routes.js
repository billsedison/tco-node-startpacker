/**
 * Configure application routes.
 */
const {Router} = require('express')
const requireDir = require('require-dir')
const passport = require('passport')
const _ = require('lodash')

const auth = require('./common/auth-middleware')
const controllers = requireDir('./controllers')

const router = Router()

// Wrap controller methods to Express middleware style
const wrap = (fn, status) => (req, res, next) =>
  fn(req)
    .then((result) => {
      res.status(status || (result ? 200 : 204))
      if (result) {
        res.send(result)
      } else {
        res.end()
      }
      next()
    })
    .catch(next)

const passportOptions = {failWithError: true}

router.get('/test', wrap(controllers.TestController.test))

module.exports = router
