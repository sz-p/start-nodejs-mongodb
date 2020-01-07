## mongodb 基础信息

### 下表列出了 RDBMS 与 MongoDB 对应的术语：

|RDBMS|MongoDB|释义|
|:--:|:--:|:--:|
|database|database|数据库|
|table|collection|数据库表/集合|
|row|document|数据记录行/文档|
|column|field|数据字段/域|
|index|index|索引|
|table joins||表连接,MongoDB不支持|
|primary key|primary key|主键,MongoDB自动将_id字段设置为主键|

### 下表为MongoDB中常用的几种数据类型。

|数据类型|描述|
|:--:|:--:|
|String|字符串。存储数据常用的数据类型。在 MongoDB 中，UTF-8 编码的字符串才是合法的。|
|Integer|整型数值。用于存储数值。根据你所采用的服务器，可分为 32 位或 64 位。|
|Boolean|布尔值。用于存储布尔值（真/假）。|
|Double|双精度浮点值。用于存储浮点值。|
|Min/Max keys|将一个值与 BSON（二进制的 JSON）元素的最低值和最高值相对比。|
|Array|用于将数组或列表或多个值存储为一个键。|
|Timestamp|时间戳。记录文档修改或添加的具体时间。|
|Object|用于内嵌文档。|
|Null|用于创建空值。|
|Symbol|符号。该数据类型基本上等同于字符串类型，但不同的是，它一般用于采用特殊符号类型的语言。|
|Date|日期时间。用 UNIX 时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建 Date 对象，传入年月日信息。|
|Object ID|对象 ID。用于创建文档的 ID。|
|Binary Data|二进制数据。用于存储二进制数据。|
|Code|代码类型。用于在文档中存储 JavaScript 代码。|
|Regular expression|正则表达式类型。用于存储正则表达式。|

## MongoDB-链接(以基于nodejs mongoose库为例)

### 标准 URI 连接语法：
```shell
mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
```

+ mongodb:// 这是固定的格式，必须要指定。

+ username:password@ 可选项，如果设置，在连接数据库服务器之后，驱动都会尝试登陆这个数据库

+ host1 必须的指定至少一个host, host1 是这个URI唯一要填写的。它指定了要连接服务器的地址。如果要连接复制集，请指定多个主机地址。

+ portX 可选的指定端口，如果不填，默认为27017

+ /database 如果指定username:password@，连接并验证登陆指定数据库。若不指定，默认打开 test 数据库。

+ ?options 是连接选项。如果不使用/database，则前面需要加上/。所有连接选项都是键值对name=value，键值对之间通过&或;（分号）隔开


