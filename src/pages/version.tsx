import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Header from "@site/src/components/Headr";

import versionStyle from '../css/version.css';

import clsx from "clsx";
import Footer from "@site/src/components/Footer";
import Link from "@docusaurus/Link";

export default function VersionPage({}) {
    let [version, setVersion] = useState([]),
        [searchValue, setSearchValue] = useState('');

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
                    <div className="row">
                        <div className="col-sm-12 col-lg-8">
                            <h1>App Version Log</h1>
                            <p>All available versions</p>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search Version"
                                       value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={clsx('version-list-box', versionStyle)}>
                        {
                            version.filter(item => item.version.indexOf(searchValue) > -1).map((i, index) => (
                                <div className="border-sm border rounded p-3 mb-3">
                                    <div className="row">
                                        <div className="col-6 d-flex mb-2 border-bottom w-100">
                                            <h2 className="flex-grow-1">
                                                <div className="badge text-bg-dark"
                                                     style={{marginRight: '5px'}}>{i.stage}</div>
                                                {index == 0 ?
                                                    <div className="badge text-bg-dark">New</div> : null}

                                                <span className="ml-2" style={{marginLeft: '10px'}}>
                                                    {i.version ?
                                                        <Link
                                                            to={`/blog/version.${i.version}`}>{i.version}</Link> : null}
                                                </span>
                                                <i className="bi bi-link"></i>
                                            </h2>
                                        </div>
                                        <div className="text-right">
                                            <b>Stage</b>: <u>{i.stage}</u>
                                        </div>
                                        <div>
                                            <b>BuildNumber</b>:
                                            <ul>
                                                {i['build-number'] ? Object.entries(i['build-number']).map(([j_key, j_value], j_index) => (
                                                    <li>{j_key as any}: {j_value as any} </li>
                                                )) : 'N/A'}
                                            </ul>
                                        </div>
                                        <div>
                                            <b>Platform</b>:
                                            <ul>
                                                {i['platform'] ? Object.entries(i['platform']).map(([j_key, j_value], j_index) => (
                                                    <li><Link
                                                        to={j_value['url'] || 'Key None'}>{j_key as any || 'Value None'}</Link>
                                                    </li>
                                                )) : 'N/A'}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {
                        version.filter(item => item.version.indexOf(searchValue) > -1).length > 0 ? null : (
                            <div className="h-100">
                                <div className="border rounded p-3 text-center">N/A</div>
                            </div>
                        )
                    }
                </div>


            </main>
            <Footer/>
        </Layout>
    );
}

