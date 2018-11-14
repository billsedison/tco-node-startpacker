/**
 * The default configuration.
 */
module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  CONTEXT_PATH: process.env.CONTEXT_PATH || '/api/v1',
  PORT: process.env.PORT || 8080,
  JWT_SECRET: process.env.JWT_SECRET || 'tco-secret',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '2d',
  SESSION_SECRET: process.env.SESSION_SECRET || 'tco-secret',

  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/tco18'
}
