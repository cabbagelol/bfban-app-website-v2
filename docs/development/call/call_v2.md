---
layout: default
title: 深链v2
parent: 深链
nav_order: 2
---

## 如何接入?

App提供不同平台'深链'实现，表现存在稍微不一致

### android

| 协议    | 地址               | 例子                    | 版本    |
|-------|------------------|-----------------------|-------|
| bfban | app              | bfban://app           | 0.2.3 |
| https | bfban.com/player | https://bfban.com/app | 0.2.5 |

### ios or macos

| 协议    | 地址  | 例子          | 版本    |
|-------|-----|-------------|-------|
| bfban | app | bfban://app | 0.2.3 |

----

## 规则

你可以在移动设备上访问`https://bfban-app.cabbagelol.net/test-app-links.html`测试链接

### 最简单唤起应用

bfban://app

### 直通

访问应用内所有可用地址，直通

|       | 值     | 类型     | 描述    | 版本     |
|-------|-------|--------|-------|--------|
|       | /page | [path] |       | 0.2.13 |
| param | path  | String | 地址和参数 | 0.2.13 |

例子: bfban://app/page
如果访问的是案件详情，它像这样: bfban://app/page?path=/player?id=1000

### 案例详情

|       | 值       | 类型     | 描述 | 版本    |
|-------|---------|--------|----|-------|
|       | /player | [path] |    | 0.2.5 |
| param | id      | String |    | 0.2.5 |

例子: bfban://app/player?id=1000

### 站内用户展示页

|       | 值        | 类型     | 描述     | 版本    |
|-------|----------|--------|--------|-------|
|       | /account | [path] |        | 0.2.5 |
| param | id       | String | 站内用户id | 0.2.5 |

例子: bfban://app/account?id=1000

### 举报

|       | 值       | 类型     | 描述 | 版本    |
|-------|---------|--------|----|-------|
|       | /report | [path] |    | 0.2.5 |

例子: bfban://app/report

### 搜索

|       | 值       | 类型     | 描述   | 版本    |
|-------|---------|--------|------|-------|
|       | /search | [path] |      | 0.2.5 |
| param | value   | String | 搜索内容 | 0.2.5 |

例子: bfban://app/search?value=内容

----

[path]: 这里指深链链接的地址
