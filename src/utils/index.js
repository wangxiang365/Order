const SQL = require('./sql')

const getOrderList = (ctx, next) => {
    const data = ctx.params

    SQL.handleFindAll(data)
    .then(json => {
        ctx.response.body = {
          code: 200,
          success: true,
          data: json,
          msg: ''
        }
    })
}

const getOrderById = (ctx, next) => {
    const data = ctx.params

    ctx.response.body = data.id
}

const editOrder = (ctx, next) => {
    const data = ctx.query

    SQL.handleCreate(data)
    .then(json => {
        ctx.response.body = {
          code: 200,
          success: true,
          data: '',
          msg: json
        }
    })
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

    SQL.deleteOne({
        id: data.id,
        delete_flag: 1
    }).then(json => {
        ctx.response.body = {
          code: 200,
          success: true,
          data: '',
          msg: json
        }
    })
}

const dropOneTable = (ctx, next) => {
    const data = ctx.params

    SQL.handleDrop(data.table)
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
    
    SQL.handleDefine(data.table)
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
    addOneTable,
    dropOneTable
}