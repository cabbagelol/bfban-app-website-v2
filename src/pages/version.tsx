import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Header from "@site/src/components/Headr";

import versionStyle from '../css/version.css';

import clsx from "clsx";
import Footer from "@site/src/components/Footer";
import Link from "@docusaurus/Link";

export default function VersionPage({}) {
    let [version, setVersion] = useState([]);

    useEffect(() => {
        onReady().then(r => r);
        return () => {
            console.log('Component unmounting');
        };
    }, []);

    async function onReady() {
        const d = await fetch('./config/version.json').then(res => res.json())
        setVersion(d.list);
        return true;
    }

    return (
        <Layout>
            <Header/>
            <main>
                <div className="container mt-5 pb-5">
                    <h1>App Version Log</h1>
                    <p>All available versions</p>
                    <hr/>
                    <div className={clsx('version-list-box', versionStyle)}>
                        {
                            version.map((i, index) => (
                                <div className="row">
                                    <h2 className="col-9">
                                        { i.version ? <Link to={`/blog/version.${i.version}`}>{i.version}</Link> : null }
                                    </h2>
                                    <span className="col-3 text-right">
                                        <u>{i.stage}</u>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
            <Footer/>
        </Layout>
    );
}

