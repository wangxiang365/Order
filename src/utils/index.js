const sqlHandle = require('./sql')

const getOrderList = (ctx, next) => {
    const data = ctx.params

    ctx.response.body = data
}

const getOrderById = (ctx, next) => {
    const data = ctx.params

    ctx.response.body = data.id
}

const editOrder = (ctx, next) => {
    const data = ctx.query

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

const dropOneTable = (ctx, next) => {
    const data = ctx.params

    sqlHandle.dropTable(data.table)
    .then(json => {
        ctx.response.body = {
          code: 200,
          success: true,
          data: {},
          msg: json
        }
    })
}

const addOneTable = (ctx, next) => {
    const data = ctx.params
    
    sqlHandle.dropTable(data.table)
    .then(json => {
        ctx.response.body = {
          code: 200,
          success: true,
          data: {},
          msg: json
        }
    })
}

module.exports = {
    getOrderList,
    getOrderById,
    editOrder,
    updateOrderById,
    deleteOrderById,
    dropOneTable,
    addOneTable
}