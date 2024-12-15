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

## 第三方
使用第三方Sdk 
- [call-app](https://github.com/zhuanzhuanfe/call-app)
- [callapp-lib](https://github.com/suanmei/callapp-lib)
