---
layout: default
title: 链接测试
parent: 开发
nav_order: 3
---

:::tip

链接实例测试，用户可以点击链接唤起应用，具体使用规则请看[深链](/docs/development/call)

:::


* [启动应用](bfban://app)
* [打开用户空间: 1 用户](bfban://app/account?id=544)
* [案件: 1956551004](bfban://app/player?id=1956551004)
* [举报](bfban://app/report)

----

* 应用搜索:
  * [案件搜索: Call](bfban://app/search?text=call&amp;type=player)
  * [站内用户搜索 : admin](bfban://app/search?text=admin&amp;type=user)
  * ~~[commentContent: test](bfban://app/search?text=test&amp;type=comment)~~ 后续版本已删除


----

**参考**

1. 测试[.html](https://bfban-app.cabbagelol.net/test-app-links.html)网页
2. 应用[路由](https://github.com/BFBAN/bfban-app-mobile/blob/master/lib/router/router.dart)源码
