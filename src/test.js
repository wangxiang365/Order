const Koa = require('koa')
const route = require('koa-route')
const app = new Koa()

const main = ctx => {
    ctx.response.body = 'Hello ~'
}

const textBody = ctx => {
    ctx.response.type = 'text'
    ctx.response.body = '1234'
}

const jsonBody = ctx => {
    ctx.response.type = 'json'
    ctx.response.body = {
        data: 123
    }
}

const about = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">About Page</a>'
}

app.use(route.get('/', main))
app.use(route.get('/about', about))
app.use(route.get('/json', jsonBody))
app.use(route.get('/text', textBody))

app.listen(3003)