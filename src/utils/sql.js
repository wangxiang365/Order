const DB = require('@xm/db-handle')

async function getHandle() {
    const sequelize = await DB()
    // 使用sequelize操作数据
}

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

module.exports = {
    getList,
    getOne,
    createOne,
    updateOne,
    deleteOne
}