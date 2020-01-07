# start-nodejs-mongodb

## 背景
随着redux以及其他前端状态管理的兴起。前端有大量的object,json需要管理、存储。对object或json进行序列化、反序列化本身就是一个较大的开销而且不安全(object内部的函数字段、Infinity字段等。序列化时都会出问题或需要特殊处理)。并且序列化后不能对内部的字段进行单独处理。采用noSql的形式直接存储json或object对象或许是一个比较好的解决方案。该项目尝试去解决json或object的存储、自由修改问题。

## 安装
+ mongodb(数据库)
+ Robo 3T(mongodb 的可视化管理工具)
+ nodejs(本项目前端后端均采用nodejs生态)

## 启动

+ in back-end
```shell
yarn install
yarn start
```

+ in front-end
```shell
yarn install
yarn start
```

## 安装启动流程
1. 安装相关软件(见[#安装]())
2. mongodb 设置用户名和密码

## 问题解决


## 参考 & 引用
https://blog.csdn.net/qq_33206732/article/details/79877948

https://www.runoob.com/mongodb/mongodb-tutorial.html

https://www.cnblogs.com/pl-boke/p/10063351.html

https://www.runoob.com/mongodb/mongodb-databases-documents-collections.html

http://www.mongoosejs.net/docs/index.html

http://www.mongoosejs.net/docs/guide.html