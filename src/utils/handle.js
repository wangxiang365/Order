const DB = require('@xm/db-handle')

async function handleQuery(sql) {
    // 使用sequelize操作数据
    const sequelize = await DB()

    await new Promise((resolve, reject) => {
        sequelize.authenticate((err, connection) => {
            if (err) {
                resolve(err)
            } else {

                let Order = sequelize.model('order')
                sequelize.query(sql, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                })
            }
        })
    })
}

module.exports = {
    handleQuery
}