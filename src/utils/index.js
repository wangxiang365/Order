const SQL = require('./sql')

async function dropOneTable(ctx) {
    ctx.response.type = 'json'

    await SQL
        .handleDrop()
        .then(() => ctx.body = {
            code: 200,
            success: true,
            data: '',
            msg: '表删除成功'
        })
        .catch(() => ctx.body = {
            code: 200,
            success: false,
            data: '',
            msg: '表删除失败'
        })
}

async function addOneTable(ctx) {
    ctx.response.type = 'json'

    await SQL
        .handleDefine()
        .then(() => ctx.body = {
            code: 200,
            success: true,
            data: '',
            msg: '表创建成功'
        })
        .catch(() => ctx.body = {
            code: 200,
            success: false,
            data: '',
            msg: '表创建失败'
        })
}

async function createOrder(ctx) {
    const data = ctx.query

    ctx.response.type = 'json'

    await SQL
        .handleCreate(data)
        .then(json => {
            ctx.body = {
                code: 200,
                success: true,
                data: '',
                msg: ''
            }
        })
        .catch(json => ctx.body = {
            code: 200,
            success: false,
            data: '',
            msg: '添加失败'
        })
}

async function getOrderById(ctx) {
    const data = ctx.params

    await SQL
        .handleFindOne(data.id)
        .then(json => ctx.body = {
            code: 200,
            success: true,
            data: json,
            msg: ''
        })
        .catch(json => ctx.body = {
            code: 200,
            success: false,
            data: json,
            msg: ''
        })
}

async function updateOrderById(ctx) {
    const data = ctx.params
    ctx.response.type = 'json'

    await SQL
        .handleEdit({
            id: data.id,
            status: data.status
        }).then(json => {
            ctx.body = {
                code: 200,
                success: true,
                data: '',
                msg: '修改成功'
            }
        }).catch(json => {
            ctx.body = {
                code: 200,
                success: false,
                data: '',
                msg: json
            }
        })
}

async function deleteOrderById(ctx) {
    const data = ctx.params
    ctx.response.type = 'json'

    await SQL
        .handleDelete({
            id: data.id,
            delete_flag: 1
        }).then(json => {
            ctx.body = {
                code: 200,
                success: true,
                data: '',
                msg: '删除成功'
            }
        }).catch(json => {
            ctx.body = {
                code: 200,
                success: false,
                data: '',
                msg: json
            }
        })
}

async function getOrderList(ctx) {
    const data = ctx.params
    ctx.response.type = 'json'

    await SQL
        .handleFindAll(data)
        .then(json => {
            ctx.body = {
                code: 200,
                success: true,
                data: json,
                msg: ''
            }
        })
        .catch(json => {
            ctx.body = {
                code: 200,
                success: false,
                data: [],
                msg: json
            }
        })
}

module.exports = {
    dropOneTable,
    addOneTable,
    createOrder,
    getOrderById,
    updateOrderById,
    deleteOrderById,
    getOrderList
}