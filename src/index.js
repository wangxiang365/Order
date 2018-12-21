const Koa = require('koa')
const routers = require('./router/index')
const app = new Koa()

app.use(routers.routes())

app.listen(3003)