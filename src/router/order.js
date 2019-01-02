const router = require('koa-router')
const OPERATE = require('../utils/index')
const order = new router()

/* 获取订单列表 */
order.get('/list', OPERATE.getOrderList)

/* 获取单个订单详情 */
order.get('/detail/:id', OPERATE.getOrderById)

/* 创建 */
order.post('/edit', OPERATE.createOrder)

/* 修改订单：已取消0、待支付1、待发货2、待收货3、待完成4 */
order.put('/update', OPERATE.updateOrderById)

/* 删除订单：删除1、正常0 */
order.delete('/delete/:id', OPERATE.deleteOrderById)

/* 测试用：添加order表 */
order.post('/add', OPERATE.addOneTable)

/* 测试用：删除order表 */
order.delete('/drop', OPERATE.dropOneTable)

module.exports = order
