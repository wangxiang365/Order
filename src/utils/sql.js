const DB = require('@xm/db-handle')
const Sequelize = require('sequelize')
const OrderInstance = require('../models/order')
const moment = require('moment')

async function handleDrop() {
    const sequelize = await DB()
    const Order = OrderInstance(sequelize, Sequelize)

    return new Promise((resolve, reject) => {
        Order
            .drop()
            .then(() => resolve())
            .catch(() => reject())
    })
}

async function handleDefine() {
    const sequelize = await DB()

    const Order = sequelize.define('order', {
        id: {
            field: 'id',
            primaryKey: true,
            type: Sequelize.BIGINT,
            allowNull: true
        },
        status: {
            field: 'status',
            type: Sequelize.STRING,
            allowNull: false
        },
        createTime: {
            field: 'create_time',
            type: Sequelize.STRING,
            allowNull: false
        },
        updateTime: {
            field: 'update_time',
            type: Sequelize.STRING,
            allowNull: false
        },
        goodInfo: {
            field: 'good_info',
            type: Sequelize.STRING,
            allowNull: false
        },
        extra: {
            field: 'extra',
            type: Sequelize.STRING,
            allowNull: false
        },
        deleteFlag: {
            field: 'delete_flag',
            type: Sequelize.SMALLINT,
            allowNull: false
        },
        accountId: {
            field: 'account_id',
            type: Sequelize.BIGINT,
            allowNull: false
        },
        aftersaleId: {
            field: 'aftersale_id',
            type: Sequelize.BIGINT,
            allowNull: true
        }
    }, {
        tableName: 'order',
        timestamps: false,
        freezeTableName: true
    })

    return new Promise((resolve, reject) => {
        Order
            .sync({
                force: true
            })
            .then(() => resolve())
            .catch(() => reject())
    })
}

async function handleCreate(param) {
    const sequelize = await DB()
    const Order = OrderInstance(sequelize, Sequelize)
    const now = new Date()
    param.create_time = moment(now).format('YYYY-MM-DD HH:mm:ss')
    param.update_time = moment(now).format('YYYY-MM-DD HH:mm:ss')

    return new Promise((resolve, reject) => {
        Order
            .create(param)
            .then(res => resolve(res))
            .catch(res => reject(res))
    })
}

async function handleFindOne(id) {
    const sequelize = await DB()
    const Order = OrderInstance(sequelize, Sequelize)

    return new Promise((resolve, reject) => {
        Order
            .findByPk(id)
            .then(res => resolve(res ? res.dataValues : null))
            .catch(res => reject(res))
    })
}

const handleEdit = (param) => handleUpdate(param)

const handleDelete = (param) => handleUpdate(param)

async function handleUpdate(param) {
    const sequelize = await DB()
    const id = param.id
    const Order = OrderInstance(sequelize, Sequelize)
    param.update_time = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')

    delete param.id

    return new Promise((resolve, reject) => {
        Order
            .update(param, {
                where: {
                    id
                }
            })
            .then(res => resolve(res))
            .catch(res => reject(res))
    })
}

async function handleFindAll(param) {
    const {pageIndex = 1, pageSize = 10} = param
    const sequelize = await DB()
    const Order = OrderInstance(sequelize, Sequelize)

    return new Promise((resolve, reject) => {
        Order
            .findAll({
                where: {
                    delete_flag: 0
                },
                limit: pageSize,
                offset: (pageIndex - 1) * pageSize
            })
            .then(rows => resolve(rows))
            .catch(res => reject(res))
    })
}

module.exports = {
    handleDrop,
    handleDefine,
    handleCreate,
    handleFindOne,
    handleEdit,
    handleDelete,
    handleFindAll
}