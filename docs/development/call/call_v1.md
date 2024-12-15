---
layout: default
title: 深链v1
parent: 深链
nav_order: 1
---

## 如何接入?

App提供不同平台'深链'实现，表现存在稍微不一致

### android

| 协议    | 地址               | 例子                                    | 版本    |
|-------|------------------|---------------------------------------|-------|
| bfban | app              | bfban://app                           | 0.2.3 |
| https | bfban.com/player | https://bfban.com/player |  0.2.3     |

### ios or macos

| 协议    | 地址                             | 例子                                     | 版本    |
|-------|--------------------------------|----------------------------------------|-------|
| bfban | app                            | bfban://app                            | 0.2.3 |

----

## 规则

ps: 实际就是get参数 :D

### 打开案例详情

| 参数 | 值   | 类型 | 描述 | 版本 |
|----|-----|-----|----|-----|
| type | player   | String | |0.2.3 |
| id | /   | String | |0.2.3 |

例子: bfban://app?type=player&id=1000

### 打开展示页

| 参数 | 值       | 类型 | 描述 | 版本 |
|----|---------|-----|----|-----|
| type | account | String | |0.2.3 |
| id | /       | String | |0.2.3 |

例子: bfban://app?type=account&id=1000
