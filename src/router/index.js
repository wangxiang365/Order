const Router = require('koa-router')
const _ = new Router
const order = require('./order')

_.use('/order', order.routes())

module.exports = _