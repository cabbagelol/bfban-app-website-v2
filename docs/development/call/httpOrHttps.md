---
layout: default
title: Cloudfare Workers-网络协议
parent: 深链
nav_order: 4
---

# 网络协议

它部署在云端Cloudfare Workers，作用将自定义协议转换为http或https来解决社区平台不识别链接问题，同时也可以提供其他平台跳板，无需使用js
sdk之类转换。唯一缺点是无法检查是否安装应用 :(

## 使用

```
https://bfban-app.as.cabbagelol.net
```

它和`Call`差不多，具体功能有后面path以及参数决定，以一个打开player为例子，它应该是这样的：

| URL                                                | 描述 |
|----------------------------------------------------|----|
| https://bfban-app.as.cabbagelol.net/player?id=1000 | 主  |
| https://bfban-app.as.bfban.com/player?id=1000      |    |
| bfban://app/player?id=1000                         |    |

唯一注意版本是否支持

## 代码实现

worker.js
```javascript
var worker_default = {
  async fetch(request) {
    const timeout = 1200;
    return Promise.race([
      (async () => {
        try {
          const url = new URL(request.url);
          if (url.protocol === "http:" || url.protocol === "https:") {
            const pathname = url.pathname;
            const searchParams = new URLSearchParams(url.search);
            let redirectUrl;
            switch (pathname) {
              case "/APP":
              case "/app":
                redirectUrl = "bfban://app";
                break;
              case "/account":
                redirectUrl = `bfban://app/account?id=${searchParams.get("id")}`;
                break;
              case "/player":
                redirectUrl = `bfban://app/player?id=${searchParams.get("id")}`;
                break;
              case "/report":
                redirectUrl = `bfban://app/report`;
                break;
              case "/search":
                redirectUrl = `bfban://app/search?id=${searchParams.get("text")}&type=${searchParams.get("type")}`;
                break;
              default:
                return new Response("\u9519\u8BEF\u5730\u5740\uFF0C\u8BF7\u68C0\u67E5\u53C2\u6570", {
                  status: 200
                });
            }
            return new Response("<html><body><p>\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u4E09\u70B9\uFF0C\u9009\u62E9\u6E38\u89C8\u5668\u6253\u5F00</p></body></html>", {
              status: 302,
              headers: {
                Location: redirectUrl
              }
            });
          }
        } catch (error) {
          throw error;
        }
        return fetch(request);
      })(),
      // Timeout logic
      new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Timeout")), timeout);
      })
    ]).then((response) => response).catch((error) => {
      return new Response("Request timed out. Redirecting...", {
        status: 302,
        headers: {
          Location: "https://bfban-app.cabbagelol.net?by_path=ex_0_cf"
        }
      });
    });
  }
};
export {
  worker_default as default
};
```
