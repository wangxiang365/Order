const DB = require('@xm/db-handle')
const Sequelize = require('sequelize')
const OrderInstance = require('../models/order')
const HANDLE = require('./handle')
const moment = require('moment')

async function handleFindAll(param) {
    const sequelize = await DB()

    await new Promise((resolve, reject) => {
        const Order = OrderInstance(sequelize, Sequelize)

        Order.findAll({
            where: {
                delete_flag: 0
            } 
        }).then(rows => {
            console.log('rows---', rows)
            for (let row in rows) {
                console.log(`${row.id}: ${row.status}`);
            }
        }).catch(res => {
            console.log('catch---', res)
        })
    })
}

const getOne = () => {

}

async function handleCreate(param) {
    const sequelize = await DB()
    
    await new Promise((resolve, reject) => {
        const Order = OrderInstance(sequelize, Sequelize)

        Order.create(param).then((err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })

}

const updateOne = (param) => handleUpdate(param)

const deleteOne = (param) => handleUpdate(param)

async function handleUpdate(param) {
    const sequelize = await DB()
    const id = param.id

    delete param.id

    await new Promise((resolve, reject) => {
        const Order = OrderInstance(sequelize, Sequelize)

        Order.update(param, {
            'where': {
                'id': {
                    eq: id
                }
            }
        }).then((err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

async function handleDefine() {
    const sequelize = await DB()
    
    await new Promise((resolve, reject) => {
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

        Order.sync({
            force: true
        })
    })
}

async function handleSearch() {
    const sequelize = await DB()

    await new Promise((resolve, reject) => {
        sequelize.authenticate().then((err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res, sequelize.models)
            }
        })
    })
}

async function handleDrop() {
    const sequelize = await DB()

    await new Promise((resolve, reject) => {
        const Order = OrderInstance(sequelize, Sequelize)
        
        Order.drop().then((err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports = {
    handleFindAll,
    getOne,
    handleCreate,
    updateOne,
    deleteOne,
    handleDefine,
    handleSearch,
    handleDrop
}