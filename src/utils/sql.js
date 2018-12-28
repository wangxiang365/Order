const DB = require('@xm/db-handle')
const HANDLE = require('./handle')
const moment = require('moment')

const getList = () => {

}

const getOne = () => {

}

const createOne = () => {

}

const updateOne = () => {

}

const deleteOne = () => {

}

async function handleDefine(tableName) {
    const sequelize = await DB()

    sequelize.define()
    .then((err, rows) => {
        if (err) {
            reject(err)
        } else {
            resolve(rows)
        }
    })
}

async function handleDrop(tableName) {
    const sequelize = await DB()
    const Order = sequelize.model(tableName)

    Order.drop().then((err, rows) => {
        if (err) {
            reject(err)
        } else {
            resolve(rows)
        }
        // 如何销毁 sequelize
    })
}

module.exports = {
    getList,
    getOne,
    createOne,
    updateOne,
    deleteOne,
    handleDefine,
    handleDrop
}