---
layout: default
title: 检查应用安装状况
parent: 深链
nav_order: 3
---

# 在android或ios检查应用是否安装

## android
包名: `com.cabbagelol.bfban`

[https://developer.android.com/training/package-visibility](https://developer.android.com/training/package-visibility)

<Tabs>
  <TabItem value="java" label="Java" default>
    ```java title="isPackageInstalled.java"
    private boolean isPackageInstalled(String packageName, PackageManager packageManager) {
        try {
            packageManager.getPackageInfo(packageName, 0);
            return true;
        } catch (PackageManager.NameNotFoundException e) {
            return false;
        }
    }
    ```
  </TabItem>
  <TabItem value="kotlin" label="kotlin">
    ```kotlin title="isPackageInstalled.kt"
    private fun isPackageInstalled(packageName: String, packageManager: PackageManager): Boolean =
        try {
            packageManager.getPackageInfo(packageName, 0)
            true
        } catch (e: PackageManager.NameNotFoundException) {
            false
        }
    ```
  </TabItem>
</Tabs>


## ios
bundle ID: `com.cabbagelol.bfban`

```swift  title="isPackageInstalled.swift"
Class LSApplicationWorkspace_class = objc_getClass("LSApplicationWorkspace");
NSObject* workspace = [LSApplicationWorkspace_class performSelector:@selector(defaultWorkspace)];
NSArray *allApplications = [workspace performSelector:@selector(allApplications)];
NSInteger appConnt = 0;

for (NSString *appStr in allApplications) {
  NSString *app = [NSString stringWithFormat:@"%@",appStr];
    NSRange range = [app rangeOfString:@"BFBAN bundle ID"];
     if (range.length > 1) {
        appConnt ++;
     }
}
if (appConnt >= 1) {
    // 已安装
}
```
