# AlphaStuManage第三次任务

## 任务要求

参考 https://spring.io/guides/tutorials/rest/ ，将前一次作业的学⽣管理应⽤改为REST风格，如有兴趣，请用vuejs或reactjs为改rest风格后端系统开发一个前端界面（加分项）。

[具体连接](https://github.com/njuics/sa-2021/wiki/%E4%BD%9C%E4%B8%9A#2021%E5%B9%B43%E6%9C%8829%E6%97%A5)

## 实验过程

1. 结合参考资料3的视频讲解内容，在pom.xml中添加hateoas和lombok的依赖。
2. 参考资料2中simplified的java文件，将Controller类转化为REST风格。
3. 为了方便测试，将数据库文件中的条目减少至10条。
4. 使用postman软件对修改后的接口进行测试。

## 接口说明

### 查询

以GET的方式访问localhost:8080/students查询得到所有学生的个人信息，
查询成功返回状态码200 OK；

以GET的方式访问localhost:8080/students/{id} , 
{id} 表示想要查询学生的id数字，如 localhost:8080/students/0, 
查询成功的话会以json格式返回对应同学的个人信息，并且返回状态码200 OK，
未查询到该学生信息会返回状态码404 Not Found。

### 删除

以DELETE的方式访问localhost:8080/students/{id} , 
如果数据库中没有该id对应的学生信息，那么返回400 Bad Request；
如果数据库中有该id对应的学生信息，那么会删除该名同学的信息，同时返回200 OK。

### 修改

在Body中填写入修改后的信息，
以PUT的方式访问 localhost:8080/students/{id}, 
如果修改成功会返回200 OK。

### 增加

在Body中填入新学生的信息，
然后以POST的方式访问localhost:8080/students, 
增加成功后会返回200 OK。




## 参考资料

1.https://spring.io/guides/tutorials/rest/

2.https://github.com/spring-projects/spring-hateoas-examples

3.https://www.bilibili.com/video/BV1GE411G7hu?p=1
