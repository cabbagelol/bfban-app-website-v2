import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Header from "@site/src/components/Headr";
import CallApp, {CallAppOptions} from "@site/src/js/call-app/index"
import DownloadConfig from "@site/static/config/download.json";

export default function AsPage({}) {
    let [asStatus, setAsStatus] = useState(-1);
    let callApp: any = new CallApp();

    useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search)
        let callConfig: CallAppOptions = {},
            path = queryParameters.get('p') || queryParameters.get('path') || `app?t=${new Date().getTime()}`;
        switch (onCheckOS()) {
            case "Android":
                callConfig = {
                    download: true,
                    customConfig: {
                        schemeUrl: `bfban://${path}`,
                        landingPage: DownloadConfig.ipa[DownloadConfig.Android.default.value][DownloadConfig.Android.default.type]
                    }
                }
                setAsStatus(1)
                break;
            case "iOS":
                callConfig = {
                    download: true,
                    delay: 10500,
                    customConfig: {
                        schemeUrl: `bfban://${path}`,
                        landingPage: DownloadConfig.ipa[DownloadConfig.ipa.default.value][DownloadConfig.ipa.default.type]
                    }
                }
                setAsStatus(1)
                break;
            case "HarmonyOS":
            default:
                setAsStatus(0)
                break;
        }

        callConfig = {
            ...callConfig,
            // 开始唤起
            callStart(ctx) {
                setAsStatus(5)
            },
            callSuccess() {
                setAsStatus(2)
            },
            callFailed() {
                setAsStatus(4)
            }
        }

        callApp = new CallApp(callConfig)
        callApp.start()

        return () => {};
    }, []);

    function onCheckOS() {
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf('android') > -1) {
            return 'Android';
        } else if (userAgent.indexOf('mac') > -1 || userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || userAgent.indexOf('ipod') > -1) {
            return 'iOS';
        } else if (userAgent.indexOf('harmonyos') > -1) {
            return 'HarmonyOS';
        } else {
            return 'Unknown';
        }
    }

    return (
        <Layout>
            <Header/>
            <main>
                <div className="container mt-5 pb-5" style={{minHeight: '100vh'}}>
                    {asStatus == 0 ? (
                        <>
                            <h1>未知设备(悲伤</h1>
                            <p>抱歉无法识别当前设备，无法给于建议，请尝试前往首页查看对应设备</p>
                        </>
                    ) : null}

                    {asStatus == 1 ? (
                        (
                            <>
                                <h1>正在唤起</h1>
                                <p>ლ(′◉❥◉｀ლ) 正在唤起程序</p>
                            </>
                        )
                    ) : null}

                    {asStatus == 2 ? (
                        (
                            <>
                                <h1>唤起成功</h1>
                                <p>怎么又回来看我力</p>
                            </>
                        )
                    ) : null}

                    {asStatus == 4 || asStatus == 5 ? (
                        (
                            <>
                                <h1>唤起失败</h1>
                                <p>悲，看起来你的设备没安装或是设备不符合</p>
                            </>
                        )
                    ) : null}
                </div>
            </main>
        </Layout>
    );
}
