## UI
官网主题色 #009bb6

## ISSUE
Datagrid 字段名称未符合接口定义

部分交互细节，需要商榷。如跳转页面还是弹窗编辑

定义哪些列表适合服务端渲染即可，哪些需要`Datatables`处理。

部分页面定义模糊，功能不清楚。如何`用户订单记录`全选`checkbox`的功能性？
## SCHEDULE
- [x] 首页
- [x] 用户订单
- [ ] 用户订单记录
- [ ] 物流管理
- [ ] 安装管理
- [ ] 退货及维修
- [ ] 我的佣金
- [x] 代理商管理
- [x] 用户管理

## STRUCTURE

main.html 为主框架，index.html为首页。不要问我为什么名字反了。 :joy:

- afterSale.html 退货及维修
- agentDetail.html 代理商详情
- agentManage.html 代理商管理
- commission.html 我的佣金
- index.html 首页
- installManage.html 安装管理
- logisticsManage.html 物流管理
- main.html 主框架
- orderManage.html 用户订单记录
- userDetail.html 用户详情
- userManage.html 用户管理
- userOrder.html 用户订单

## TODO

css, js 需要模块化管理

优化该框架引用的资源