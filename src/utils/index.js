const SQL = require('./sql')

const getOrderList = (ctx, next) => {
    const data = ctx.params

    ctx.response.body = data
}

const getOrderById = (ctx, next) => {
    const data = ctx.params

    ctx.response.body = data.id
}

const createOrder = (ctx, next) => {
    const data = ctx.params

    ctx.response.type = 'text'
    ctx.response.body = data
}

const updateOrderById = (ctx, next) => {
    const data = ctx.params

    ctx.response.type = 'json'
    ctx.response.body = {
        data: 123
    }
}

const deleteOrderById = (ctx, next) => {
    const data = ctx.params

    ctx.response.body = data.id
}

module.exports = {
    getOrderList,
    getOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById
}