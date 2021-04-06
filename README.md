# AlphaStuManage第二次任务



## 任务要求

[具体链接](https://github.com/njuics/sa-2021/wiki/%E4%BD%9C%E4%B8%9A#2021%E5%B9%B43%E6%9C%8822%E6%97%A5)



## 实验软件

* Docker version 19.03.13-ce, build 
* HA-Proxy version 2.3.9-53945bf
* gatling-charts-highcharts-bundle-3.5.1
* bitnami/redis (docker)



## 实验过程

1. 修改MVC模型中的查询语句，支持如下的复杂的查询

   ```sql
   SELECT DISTINCT owner FROM Owner owner WHERE owner.name LIKE %:name% AND owner.gender LIKE %:gender% AND owner.address LIKE %:address% AND owner.department LIKE %:department%
   ```

2. 随机生成1000条学生的个人信息数据，插入数据库

3. 编写service类，使得系统可以接入Redis缓存，Redis数据库使用bitnami/redis (docker)

4. 利用jib插件将系统制作为容器镜像，制作出不使用redis缓存和 使用redis缓存的两种镜像，方便之后的测试

5. 使用haproxy结合docker运行多个服务器节点，使用gatling软件 进行多个web实例 以及 有/无缓存 等多种情况的压力测试(atOnceUsers=200)



## 具体文件

在result文件夹中存放了具体压力测试的具体结果，共进行8次实验，每次实验对应一个文件夹，文件夹中包含自动生成的测试结果， txt文件是命令行中的report。

haproxy.cfg 是具体的 使用haproxy 软件水平扩展时的配置文件。

在simulations 文件夹中存放了具体压力测试的scala文件。

## 测试结果

下图表示在不同情况下的 mean response time.

|            | 没有cache | 有cache  |
| ---------- | --------- | -------- |
| 1个web实例 | 19575 ms  | 11210 ms |
| 2个web实例 | 9959 ms   | 5790 ms  |
| 3个web实例 | 6285 ms   | 3231 ms  |
| 4个web实例 | 5022 ms   | 2261 ms  |

## 结果分析

对于一个系统，当 是否使用cache的情况不变时，增加web实例可以减少平均响应时间，

当使用的web实例数量固定时，使用cache和不使用cache相比，可以减少平均响应时间。

当系统的平均响应时间偏大时，增加cache和扩展实例个数都是非常有效的方法。




## 参考资料

https://njuics.github.io/sa-2021/ 

https://www.bilibili.com/video/BV1X7411S7yM/

https://www.bilibili.com/video/BV17g4y1871A/