---
slug: 2026/04/ios-sideload-guide
title: 关于 BFBAN App iOS 客户端自签安装方案的说明
date: 2026-04-15
authors: [ OfficialBlog ]
tags: [ app, ios, guide ]
---

由于业务上架维护调整，当前 BFBAN App 暂不提供 iOS App Store 官方商店直接下载渠道。为保障广大 iOS 用户的使用体验，官方现已提供自签名（Sideloading）安装方案与官方 IPA 文件分发。

<!-- truncate -->

:::tip 保留原有分发地址
此前的 Apple 商店及测试地址依然保留并提供参考：
- **Apple App Store 历史地址**：[https://apps.apple.com/us/app/bfban/id6446828173](https://apps.apple.com/us/app/bfban/id6446828173)（已下架或仅支持曾购买/下载过的账号在“已购项目”中重新下载）
- **TestFlight 测试通道**：[https://testflight.apple.com/join/PulChYQj](https://testflight.apple.com/join/PulChYQj)（名额有限）
- **官方 IPA 下载地址（GitHub Releases）**：[https://github.com/bfban/bfban-app-mobile/releases](https://github.com/bfban/bfban-app-mobile/releases)
:::

### 快速自签指南概要

1. **下载 IPA**：前往 [bfban-app-mobile Releases](https://github.com/bfban/bfban-app-mobile/releases) 获取最新的 `.ipa` 文件。
2. **选择签名工具**：
   - **Sideloadly（推荐）**：支持 Win/Mac，直接连接手机拖入 IPA，输入 Apple ID 即可一键完成签名安装。
   - **AltStore**：支持局域网 WiFi 无线自动刷新证书。
   - **TrollStore（巨魔）**：适合特定系统版本的越狱/免签神器，永久免签名。
3. **初次安装设置**：
   - 证书信任：前往 iOS「设置」->「通用」->「VPN 与设备管理」信任您的 Apple ID。
   - 开发者模式（iOS 16+）：前往「设置」->「隐私与安全性」开启「开发者模式」并重启设备。

如需查看详细操作步骤与常见问题，请参阅完整文档：[iOS 客户端自签安装方案](/docs/ios-sideload)。

