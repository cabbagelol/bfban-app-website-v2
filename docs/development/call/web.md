---
layout: default
title: 网页调用(ts或js)
parent: 深链
nav_order: 4
---

## a标签

```html
<a href="bfban://app">open app</a>
```

## 脚本方式

最简单的javascript调用，但它无法检查应用是否安装，并跳转到商店

```javascript
window.location.open("bfban://app")
```

## 本网站

此网站自带一个转换，由`call-app`实现

| 地址                                                                  | 描述                                  |                           |
|---------------------------------------------------------------------|-------------------------------------|---------------------------|
| https://bfban-app.cabbagelol.net/as                                 | 默认                                  | bfban://app               |
| https://bfban-app.cabbagelol.net/as?p=app/player?id=544             | 自定义                                 | bfban://app/player?id=544 |
| https://bfban-app.cabbagelol.net/as?path=app/player?id=544          | 自定义                                 | bfban://app/player?id=544 |
| https://bfban-app.cabbagelol.net/as?p=app/page?path=/player?id=1000 | 自定义，套娃🪆，类似player功能可以使用简化版本，结果和上面一样 |                           |

## 第三方

使用第三方Sdk

- [call-app](https://github.com/zhuanzhuanfe/call-app)
- [callapp-lib](https://github.com/suanmei/callapp-lib)
