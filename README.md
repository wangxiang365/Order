## 订单

## 执行命令
$ node src/index.js

结合postman发送请求
或者直接打开页面（只适合get请求） 
请求举例：http://localhost:3003/order/list

## 表字段
>order {
>>>id: int, // 订单id
>>>status: int, // 状态，包括：0已取消，1待支付，2待发货，3待收货，4已完成
>>>create_time: date, // 下单时间
>>>update_time: date, // 修改时间
>>>good_info: String, // 商品信息，包括：id(int), trade_name(String), price(double), number(int), freight(double), remark(String)
>>>extra: String, // 其他信息，包括：address, receiver, phone
>>>delete_flag: int, // 是否删除的标志：0为正常，1为删除
>>>account_id: String, // 用户id
>>>aftersale_id: String, // 售后id
>}