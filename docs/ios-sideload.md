---
layout: default
title: iOS 客户端自签安装方案
sidebar_label: 📱 iOS 自签方案
nav_order: 3
sidebar_position: 3
---

# BFBAN App iOS 客户端自签安装方案

由于上架策略与平台维护调整，BFBAN App 当前**暂不提供 iOS App Store 商店直接下载**。为了让广大 iOS 用户能够继续在 iPhone / iPad 设备上使用 BFBAN 客户端，特提供基于 IPA 安装包的自签名（Sideloading）安装方案。

:::info 保留下载地址说明
我们依然保留此前的官方分发渠道地址供历史用户或测试用户参考：
- **Apple App Store 历史地址**：[https://apps.apple.com/us/app/bfban/id6446828173](https://apps.apple.com/us/app/bfban/id6446828173)（已下架或仅限曾获取账号在“已购项目”中重新下载）
- **Apple TestFlight 测试邀请**：[https://testflight.apple.com/join/PulChYQj](https://testflight.apple.com/join/PulChYQj)（名额有限或测试版本更替）
- **IPA 官方安装包发布页（GitHub Releases）**：[https://github.com/bfban/bfban-app-mobile/releases](https://github.com/bfban/bfban-app-mobile/releases)
:::

---

## 一、准备工作

1. **下载最新 IPA 安装包**：
   前往 GitHub Releases 页面：[bfban-app-mobile Releases](https://github.com/bfban/bfban-app-mobile/releases)，下载最新版本的 `app-release.ipa`（或名为 `bfban.ipa`）文件至电脑或手机本地。
2. **准备 Apple ID**：
   准备一个普通 Apple ID（可使用日常账号或单独注册一个小号，仅用于签名）。

---

## 二、推荐自签方案

### 方案 1：使用 Sideloadly 签名安装（最推荐，简单快捷）

[Sideloadly](https://sideloadly.io/) 是一款轻量、稳定的桌面端 iOS 签名工具，支持 Windows 和 macOS。

#### 操作步骤：
1. **安装工具**：
   - 访问 [Sideloadly 官网](https://sideloadly.io/)，根据操作系统下载并安装 Sideloadly。
   - Windows 用户建议使用非微软商店版本的 iTunes 与 iCloud（Sideloadly 页面提供了直接下载链接）。
2. **连接设备**：
   - 使用数据线将 iPhone/iPad 连接到电脑，并在设备上弹窗提示中选择“信任此电脑”。
3. **导入 IPA 与签名**：
   - 打开 Sideloadly，工具会自动识别已连接的 iOS 设备。
   - 将下载好的 BFBAN `.ipa` 文件拖入 Sideloadly 界面左侧区域。
   - 在 `Apple ID` 输入框中填入用于签名的 Apple ID 邮箱。
   - 点击 **Start** 按钮，根据提示输入 Apple ID 密码（若开启双重验证，请输入收到的 6 位验证码）。
4. **等待安装完成**：
   - 签名并传输完成后，设备桌面将出现 BFBAN 图标。

---

### 方案 2：使用 AltStore 自签安装（支持无线自动刷新）

[AltStore](https://altstore.io/) 适合希望在同一局域网下自动刷新证书的用户。

#### 操作步骤：
1. 访问 [AltStore 官网](https://altstore.io/) 下载并安装 **AltServer**（Windows / Mac）。
2. 电脑启动 AltServer，连接手机，点击菜单栏/托盘 AltServer 图标，选择 `Install AltStore -> [你的手机]`，输入 Apple ID 完成安装。
3. 手机端打开 AltStore，前往 `My Apps` 页面。
4. 点击左上角 `+` 号，选择下载好的 BFBAN `.ipa` 文件，AltStore 将自动完成签名并安装到设备。

---

### 方案 3：使用 TrollStore 巨魔商店（仅限支持的系统版本）

如果你的 iOS 设备处于 TrollStore 支持的系统版本范围内（如 iOS 14.0 - 16.6.1、iOS 17.0 等）：
1. 在手机上通过 Safari 或文件应用下载 BFBAN `.ipa` 文件。
2. 点击分享按钮，选择 **“通过 TrollStore 打开”**（Copy to TrollStore）。
3. 点击 **Install**，即可实现**永久免签名安装**，无 7 天续期烦恼。

---

## 三、安装后首次打开设置（重要）

### 1. 信任开发者证书
自签完成后首次点击应用图标，iOS 系统会提示“不受信任的开发者”：
- 进入系统 **设置 -> 通用 -> VPN 与设备管理**（或“设备管理”）。
- 在“开发者 App”分类下找到你的 Apple ID 证书。
- 点击进入并选择 **信任“你的 Apple ID”**。

### 2. iOS 16 及更高版本开启“开发者模式”
如果你的系统是 iOS 16、iOS 17 或更新版本，必须开启开发者模式：
- 进入系统 **设置 -> 隐私与安全性**。
- 滑动到底部，找到 **开发者模式** 并将其开启。
- 按照系统提示重启设备，并在重启后解锁确认启用。

---

## 四、常见问题 (FAQ)

- **Q: 免费 Apple ID 自签有效期是多久？**
  - A: 个人免费 Apple ID 签名的应用有效期为 **7 天**。到期后应用会闪退，只需重新连接电脑使用 Sideloadly 覆盖安装，或通过 AltStore 刷新签名即可，应用内的数据和设置会完整保留。
- **Q: 为什么输入 Apple ID 密码时提示失败？**
  - A: 建议检查密码是否正确；若开启了两步验证，确保正确输入了手机上弹出的验证码。密码仅用于向苹果开发者服务器请求签名证书，工具不会存储您的密码。
- **Q: 后续应用有新版本如何更新？**
  - A: 在 GitHub Releases 下载最新版本的 `.ipa`，再次使用 Sideloadly/AltStore 签名安装即可直接覆盖更新。

