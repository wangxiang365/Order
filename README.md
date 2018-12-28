## 订单

## 执行命令
$ node src/index.js

结合postman发送请求
或者直接打开页面（只适合get请求） 
请求举例：http://localhost:3003/order/list

## order表 字段(类型)
|  订单id | 状态 |  下单时间 |  修改时间 |  商品信息 |  其他信息 |  是否删除 |  用户id |  售后id |
|:-----|-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
|id(int) |  status(int)  |   create_time(date)  |   update_time(date)  |   good_info(String)  |   extra(String)  |   delete_flag(int)  |   account_id(int)  |   aftersale_id(int)  |

* 状态(status)，包括：0已取消，1待支付，2待发货，3待收货，4已完成
* 商品信息(good_info)，包括：id(int), trade_name(String), price(double), number(int), freight(double), remark(String)
* 其他信息(extra)，包括：address, receiver, phone
* 是否删除(delete_flag)：0为正常，1为删除