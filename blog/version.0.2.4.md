---
title: 0.2.4
date: 2023-4-16
authors: [ OfficialVersion ]
tags: [ version ]
---

新增 

1. 网络检测改进，添加编辑，允许测试人员随时修改线上版本提供测试链接(android: >0.2.4+13, ios: >0.2.4+7),
2. 新增许可证页面，列出第三方开源以及它们许可证 (android: >0.2.4+13, ios: >0.2.4+7),
3. 文本渲染器新增支持部分缩语、支持自动识别链接 (android: >0.2.4+14, ios: >0.2.4+8),

优化

1. 在语言列表中，现在不在是切换时更新语言，需要切换后确认，它将按照当前语言来判断是否强制从远程更新现有语言包,
2. 版本页面新增编译版本,
3. 改进持久存储逻辑,

修复

1. 部分主题引起的文本不可见问题,
2. 上传媒体错误编码，暂时禁用文件上传,
3. 修复0.2.3修改的htmllink策略，引起链接无法打开问题,
4. 修复展示页下用户举报获取失败问题